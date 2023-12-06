import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import ConfirmDialog from './components/ConfirmDialog';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialTodos: Todo[] = JSON.parse(localStorage.getItem('todos') || '[]');

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [inputText, setInputText] = useState<string>('');
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputText.trim() !== '') {
      const newTodo: Todo = {
        id: todos.length + 1,
        text: inputText,
        completed: false,
      };
      setTodos([newTodo,...todos]);
      setInputText('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
  };

  const handleConfirmDialogClose = () => {
    // Close the confirmation dialog
    setShowConfirmDialog(false);
  };

  const handleConfirmDialogConfirm = () => {
    // Clear completed todos
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed));
    setShowConfirmDialog(false); // Close the confirmation dialog
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className='container'>
        <div className='input-header'>
          <input
            type="text"
            placeholder="Add Todo"
            value={inputText}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleAddTodo} className='storybook-button--primary'>Add</button>
          <button onClick={clearCompleted} className='storybook-button--primary'>Clear Completed</button>
        </div>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      </div>
        <ConfirmDialog
          isOpen={showConfirmDialog}
          onClose={handleConfirmDialogClose}
          onConfirm={handleConfirmDialogConfirm}
        />
    </div>
  );
};

export default App;
