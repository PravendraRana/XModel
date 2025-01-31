import FormData from "./FormData";
import "./Modal.css";
import { useEffect } from "react";

const Modal = ({open, onClose }) => {
  
  useEffect(() => {
    debugger;
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".modal-content") && open) {
        onClose(); // Call onClose function passed as prop to close the modal
      }
    };

    // Add event listener when the modal is open
    if (open) {
      document.addEventListener("click", handleOutsideClick);
    }

    // Clean up event listener when component unmounts or modal closes
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [open, onClose]);

  return (
    <>
      {open && (
        <div className="modal active">
          <div className="modal-content">
            <FormData/>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;