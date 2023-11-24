import { useState, useEffect } from 'react';
import './App.css';

export default function TodoList() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const img = 'https://i.ibb.co/xqmT7qQ/Screenshot-2.png';
  const description = 'Working hard everytime'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function formatDate(date: Date) {
    return new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(date);
  }

  function formatTime(date: Date) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <div>
      <h1>To Do List for {formatDate(currentTime)}</h1>
      <p> It's now: {formatTime(currentTime)}</p>
      <img src= {img} alt= {description} />
    </div>
  );
}
