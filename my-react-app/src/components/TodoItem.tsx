import React, { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteClick = () => {
    setShowConfirmDialog(true);
    setShowOverlay(true)
  };

  const handleConfirmDialogClose = () => {
    setShowConfirmDialog(false);
    setShowOverlay(false)
  };

  const handleConfirmDialogConfirm = () => {
    deleteTodo(todo.id);
    setShowConfirmDialog(false);
    setShowOverlay(false)
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <span className='content' style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}>
          {todo.text}
        </span>
      </label>
      <button onClick={handleDeleteClick} className='storybook-button--secondary delete'>Delete</button>
      {showOverlay && <div className='overlay'></div>}
      {showConfirmDialog && (
        <ConfirmDialog
          isOpen={showConfirmDialog}
          onClose={handleConfirmDialogClose}
          onConfirm={handleConfirmDialogConfirm}
        />
      )}
    </li>
  );
};

export default TodoItem;
