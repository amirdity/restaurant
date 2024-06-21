import PropTypes from "prop-types";
import classes from "./Modal.module.css";
import ReactDom from "react-dom";
function Backdrop({ onClick }) {
  return <div className={classes.backdrop} onClick={onClick} />;
}
function ModalOverlay({ children }) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}> {children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");
function Modal({ children, onClose }) {
  return (
    <>
      {ReactDom.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
      {/* <Backdrop />
      <ModalOverlay /> */}
    </>
  );
}

ModalOverlay.propTypes = {
  children: PropTypes.array,
};
Modal.propTypes = {
  children: PropTypes.array,
  onClose: PropTypes.func
};
Backdrop.propTypes = {
  onClick: PropTypes.func,
};
export default Modal;
