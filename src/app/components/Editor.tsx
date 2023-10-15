import Controls from './Controls';
import PersonalDetails from './PersonalDetails';
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

function Editor({
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
    <Wrapper className={'editor'}>
      <Controls />
      <PersonalDetails
        name={name}
        email={email}
        phone={phone}
        address={address}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
      />
    </Wrapper>
  );
}

export default Editor;
