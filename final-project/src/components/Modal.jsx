import { createPortal } from "react-dom";

export default function Modal({ onConfirm, onCancel }) {
  return createPortal(
    <div>
      <p>Are you sure?</p>

      <button onClick={onConfirm}>Yes</button>
      <button onClick={onCancel}>Cancel</button>
    </div>,
    document.body
  );
}