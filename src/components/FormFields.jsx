import "./FormFields.css";

const FormFields = ({ type, label, id, onChangeHandler, value }) => {

  return (
    <>
      <div className="form-fields">
        <label htmlFor={id} className="form-label">
          {label} :
        </label>
        <input
          id={id}
          type={type}
          onChange={(e) => onChangeHandler(e, value)}
          className="form-input"
          required
        />
      </div>
    </>
  );
};

export default FormFields;