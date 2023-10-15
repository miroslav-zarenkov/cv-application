import Controls from './Controls';
import PersonalDetails from './PersonalDetails';
import Wrapper from './Wrapper';

type EditorProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
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
      <Controls
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
      />
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
