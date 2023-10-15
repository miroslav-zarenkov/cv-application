import Button from './Button';
import Wrapper from './Wrapper';
import addExperience from '../utils/addExperience';

function Experience() {
  return (
    <Wrapper className={'editor-experience'}>
      <h2>Experience</h2>
      <Button text="Add Experience" onClick={addExperience} />
    </Wrapper>
  );
}

export default Experience;
