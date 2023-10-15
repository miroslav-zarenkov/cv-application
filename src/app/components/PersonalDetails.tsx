import Input from './Input';
import Wrapper from './Wrapper';

type EditorProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  setName: (value: string) => void;
  setEmail: (value: string) => void;
  setPhone: (value: string) => void;
  setAddress: (value: string) => void;
};

function PersonalDetails({
  name,
  email,
  phone,
  address,
  setName,
  setEmail,
  setPhone,
  setAddress,
}: EditorProps) {
  return (
    <Wrapper className={'editor-personal-details'}>
      <h2>Personal Details</h2>
      <Input
        type={'text'}
        text={'Name'}
        dataKey={'name'}
        id={'name'}
        placeholder={'Enter name'}
        value={name}
        onInputChange={setName}
      />
      <Input
        type={'email'}
        text={'Email'}
        dataKey={'email'}
        id={'email'}
        placeholder={'Enter email'}
        value={email}
        onInputChange={setEmail}
      />
      <Input
        type={'tel'}
        text={'Phone number'}
        dataKey={'phone'}
        id={'phone'}
        placeholder={'Enter phone'}
        value={phone}
        onInputChange={setPhone}
      />
      <Input
        type={'text'}
        text={'Address'}
        dataKey={'address'}
        id={'address'}
        placeholder={'Enter address'}
        value={address}
        onInputChange={setAddress}
      />
    </Wrapper>
  );
}

export default PersonalDetails;
