type InputProps = {
  type: string;
  text: string;
  id: string;
  dataKey: string;
  placeholder: string;
  value: string;
  onInputChange: (value: string) => void;
};

function Input({
  type,
  text,
  dataKey,
  id,
  placeholder,
  value,
  onInputChange,
}: InputProps) {
  function addText(event: React.ChangeEvent<HTMLInputElement>) {
    onInputChange(event.target.value);
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
