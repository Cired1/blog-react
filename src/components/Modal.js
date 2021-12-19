import "./Modal.css";

const Modal = ({ children, isOpen }) => {
  return (
    <div className={`modal ${isOpen && "is-open"}`}>
      {children}
    </div>
  );
};

export default Modal;
