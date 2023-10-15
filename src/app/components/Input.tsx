import { useState } from 'react';

type InputProps = {
  type: string;
  text: string;
  id: string;
  dataKey: string;
  placeholder: string;
};

function Input({ type, text, id, dataKey, placeholder }: InputProps) {
  const [value, setValue] = useState('');

  function addText(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div>
      <label htmlFor={id}>{text}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        data-key={dataKey}
        value={value}
        onChange={addText}
      />
    </div>
  );
}

export default Input;
