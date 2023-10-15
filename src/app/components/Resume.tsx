import ResumePersonal from './ResumePersonal';
import Wrapper from './Wrapper';

type ResumeProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
  university: string;
};

function Resume({ name, email, phone, address, university }: ResumeProps) {
  return (
    <Wrapper className={'resume'}>
      <ResumePersonal
        name={name}
        email={email}
        phone={phone}
        address={address}
        university={university}
      />
    </Wrapper>
  );
}

export default Resume;
