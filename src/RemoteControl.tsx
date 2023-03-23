import React from 'react';

interface Props {
  name: string;
}

const RemoteControl: React.FC<Props> = ({ name }) => {
  return <div>Hello, {name}!
  <button type="button" className="btn btn-secondary">Secondary</button>
  </div>;
  
};

export default RemoteControl;
