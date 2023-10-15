import clearResume from '../utils/clearResume';
import loadResume from '../utils/loadResume';
import Button from './Button';

type ControlsProps = {
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
};

function Controls({ setName, setEmail, setPhone, setAddress }: ControlsProps) {
  return (
    <div className="editor-controls">
      <Button
        text="Clear Resume"
        onClick={() => clearResume(setName, setEmail, setPhone, setAddress)}
      />
      <Button
        text="Load Example"
        onClick={() => loadResume(setName, setEmail, setPhone, setAddress)}
      />
    </div>
  );
}

export default Controls;
