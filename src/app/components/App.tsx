import { useState } from 'react';
import '../../sass/components/_App.scss';
import Editor from './Editor';
import Resume from './Resume';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div className="app">
      <Editor
        name={name}
        email={email}
        phone={phone}
        address={address}
        setName={setName}
        setEmail={setEmail}
        setPhone={setPhone}
        setAddress={setAddress}
      />
      <Resume name={name} email={email} phone={phone} address={address} />
    </div>
  );
}

export default App;
