// ParentComponent.tsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const [childData, setChildData] = useState<string>('');

  const handleChildData = (dataFromChild: string) => {
    setChildData(dataFromChild);
  };

  return (
    <div>
      <ChildComponent sendDataToParent={handleChildData} />
      <p>Data from child: {childData}</p>
    </div>
  );
};

export default ParentComponent;
