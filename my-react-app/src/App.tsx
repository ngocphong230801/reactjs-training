import './App.css'

export default function Avatar() {
  const avatar = 'https://i.ibb.co/THVHD48/book-2.jpg';
  const description = 'Gregorio Y. Zara';

  return (
    <div>

      <img
        className="avatar"
        src= {avatar}
        alt= {description}
      />
    </div>
  );
}
