import { useState } from 'react';
import Button from './Button';
import Wrapper from './Wrapper';
import EducationForm from './EducationForm';

interface EducationProps {
  university: string;
  setUniversity: (university: string) => void;
}

function Education({ university, setUniversity }: EducationProps) {
  const [showEducationForm, setShowEducationForm] = useState(false);
  const handleClick = () => {
    setShowEducationForm(!showEducationForm);
  };
  return (
    <Wrapper className={'editor-education'}>
      <h2>Education</h2>
      {showEducationForm && (
        <>
          <EducationForm
            university={university}
            setUniversity={setUniversity}
            handleClick={handleClick}
          />
        </>
      )}
      {!showEducationForm && (
        <Button text="Add Education" onClick={handleClick} />
      )}
    </Wrapper>
  );
}

export default Education;
