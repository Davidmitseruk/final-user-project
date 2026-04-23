import { createPortal } from "react-dom";

export default function Modal({children, onClose}) {
  return createPortal(
    <div>
      <div>
        {children}
        <button onClick={onClose}>Close</button>
        
      </div>
    </div>,
    document.body
  );
}