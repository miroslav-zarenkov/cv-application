import ResumePersonal from './ResumePersonal';
import Wrapper from './Wrapper';

type ResumeProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

function Resume({ name, email, phone, address }: ResumeProps) {
  return (
    <Wrapper className={'resume'}>
      <ResumePersonal
        name={name}
        email={email}
        phone={phone}
        address={address}
      />
    </Wrapper>
  );
}

export default Resume;
