import Input from './Input';
import Wrapper from './Wrapper';

function PersonalDetails() {
  return (
    <Wrapper className={'personal-details'}>
      <h2>Personal Details</h2>
      <Input
        type={'text'}
        text={'Name'}
        dataKey={'name'}
        id={'name'}
        placeholder={'Enter name'}
      />
      <Input
        type={'email'}
        text={'Email'}
        dataKey={'email'}
        id={'email'}
        placeholder={'Enter email'}
      />
      <Input
        type={'tel'}
        text={'Phone number'}
        dataKey={'phone'}
        id={'phone'}
        placeholder={'Enter phone'}
      />
      <Input
        type={'text'}
        text={'Address'}
        dataKey={'address'}
        id={'address'}
        placeholder={'Enter address'}
      />
    </Wrapper>
  );
}

export default PersonalDetails;
