import React from 'react';

interface TodoItemProps {
  todo: { id: number; text: string; completed: boolean };
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo, deleteTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  const handleDeleteClick = () => {
    deleteTodo(todo.id);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleTodoClick}
        />
        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          {todo.text}
        </span>
      </label>
      <button onClick={handleDeleteClick}>Delete</button>
    </li>
  );
};

export default TodoItem;
