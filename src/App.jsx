import Form from "./components/form";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1>User Details Modal</h1>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
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
          Open Form
        </button>
      </div>

      <Modal open={open} onClose={onClose}>
        <Form/>
      </Modal>
    </>
  );
}

export default App;