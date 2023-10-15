import Button from './Button';

type ControlsProps = {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
};

function Controls({ setName, setEmail, setPhone, setAddress }: ControlsProps) {
  function clearResume() {
    setName('');
    setEmail('');
    setPhone('');
    setAddress('');
  }
  function loadResume() {
    setName('Test Name');
    setEmail('test@test.com');
    setPhone('1234567');
    setAddress('Test City');
  }
  return (
    <div className="editor-controls">
      <Button text="Clear Resume" onClick={clearResume} />
      <Button text="Load Example" onClick={loadResume} />
    </div>
  );
}

export default Controls;
