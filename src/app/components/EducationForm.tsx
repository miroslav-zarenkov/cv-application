import Button from './Button';
import Input from './Input';

interface EducationFormProps {
  university: string;
  setUniversity: (university: string) => void;
  handleClick: () => void;
}

function EducationForm({
  university,
  setUniversity,
  handleClick,
}: EducationFormProps) {
  return (
    <>
      <Input
        type={'text'}
        text={'University'}
        dataKey={'university'}
        id={'university'}
        placeholder={'Enter university'}
        value={university}
        onInputChange={setUniversity}
      />
      <Button text="Remove Education" onClick={handleClick} />
    </>
  );
}

export default EducationForm;
