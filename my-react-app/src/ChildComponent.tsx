// ChildComponent.tsx
import React from 'react';

interface ChildProps {
  sendDataToParent: (dataFromChild: string) => void;
}

const ChildComponent: React.FC<ChildProps> = ({ sendDataToParent }) => {
  const sendData = () => {
    const data = 'Hello from child!';
    sendDataToParent(data);
  };

  return (
    <div>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default ChildComponent;
