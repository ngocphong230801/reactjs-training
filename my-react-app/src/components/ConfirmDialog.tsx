import React from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  const handleConfirm = (): void => {
    onConfirm();
    onClose();
  };

  const handleCancel = (): void => {
    onClose();
  };

  return (
    <div className="confirm-dialog">
      <div className="dialog-content">
        <p className='dialog-p'>Are you sure remove item?</p>
        <div className="button-group">
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleConfirm}>Yes</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
