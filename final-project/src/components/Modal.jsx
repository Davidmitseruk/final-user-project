import { createPortal } from "react-dom";
import styles from "../styles/modal.css"

export default function Modal({children, onClose}) {
  return createPortal(
    <div className="modalWindow">
      <div className="modalBody">
        {children}
        <button onClick={onClose} className="closeBtn">Close</button>
        
      </div>
    </div>,
    document.body
  );
}