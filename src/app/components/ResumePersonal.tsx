import Wrapper from './Wrapper';

type ResumeProps = {
  name: string;
  email: string;
  phone: string;
  address: string;
};

function ResumePersonal({ name, email, phone, address }: ResumeProps) {
  return (
    <Wrapper className={'resume-personal-info'}>
      <div>Name: {name}</div>
      <div>Email: {email}</div>
      <div>Phone: {phone}</div>
      <div>Address: {address}</div>
    </Wrapper>
  );
}

export default ResumePersonal;
