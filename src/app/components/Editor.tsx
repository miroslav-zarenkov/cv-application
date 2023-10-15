import Controls from './Controls';
import Education from './Education';
import Experience from './Experience';
import PersonalDetails from './PersonalDetails';
import Wrapper from './Wrapper';

type EditorProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  university: string;
  setName: (name: string) => void;
  setEmail: (email: string) => void;
  setPhone: (phone: string) => void;
  setAddress: (address: string) => void;
  setUniversity: (university: string) => void;
};

function Editor({
  name,
  email,
  phone,
  address,
  university,
  setName,
  setEmail,
  setPhone,
  setAddress,
  setUniversity,
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
      <Education university={university} setUniversity={setUniversity} />
      <Experience />
    </Wrapper>
  );
}

export default Editor;
