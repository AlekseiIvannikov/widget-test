import './Modal.css';

import React from 'react';

import Button from '../Button/Button.tsx';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, title, children, onConfirm, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        {title && <div className="modal-header">{title}</div>}

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onConfirm} type="success">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
