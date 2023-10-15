import '../../sass/components/_App.scss';
import Wrapper from './Wrapper';

function App() {
  return (
    <div className="app">
      <Wrapper className={'edit'}>
        <Wrapper className={'edit-box'}>Edit</Wrapper>
      </Wrapper>
      <Wrapper className={'resume'}>
        <Wrapper className={'resume-box'}>Resume</Wrapper>
      </Wrapper>
    </div>
  );
}

export default App;
