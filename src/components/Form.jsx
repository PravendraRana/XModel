import { useState } from "react";
import FormFields from "./FormFields";
import "./Form.css";

const formLabels = [
  { id: "username", label: "Username", type: "text", value: "username" },
  { id: "email", label: "Email Address", type: "email", value: "email" },
  { id: "phone", label: "Phone Number", type: "tel", value: "phone" },
  { id: "dob", label: "Date of Birth", type: "date", value: "dateOfBirth" },
];

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dateOfBirth: "",
  });

  console.log("formdata", formData);

  const onChangeHandler = (e, label) => {
    let value = e.target.value;
    if (value) {
      setFormData((preFormData) => ({ ...preFormData, [label]: value }));
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!(formData.phone.length === 10)) {
      window.alert("Invalid phone number");
    }

    if (!(new Date(formData.dateOfBirth) <= new Date())) {
      window.alert("Invalid date of birth");
    }
  };

  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <div>
          <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>
            Fill Details
          </h3>
        </div>
        <div className="submit-button">
          {formLabels.map((label) => (
            <FormFields
              key={label.id}
              id={label.id}
              type={label.type}
              value={label.value}
              onChangeHandler={onChangeHandler}
              label={label.label}
            />
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "1rem",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "0.5rem",
              width: "10rem",
              background: "rgb(0, 155, 255)",
              borderRadius: "5px",
              border: "none",
              cursor: "pointer",
              color: "white",
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;