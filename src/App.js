import { useState } from 'react';
import './App.css';
import ConeElement from './components/ConeElement';
import UserForm from './components/UserForm';

const App = () => {

  const initialConeParameters = {
    height: 16,
    radius: 10,
    segments: 64,
  };

  const [coneParameters, setConeParameters] = useState(initialConeParameters);
  const [requestStatus, setRequestStatus] = useState('idle');

  return (
    <div className="App">
      <UserForm
        setConeParameters={setConeParameters}
        setRequestStatus={setRequestStatus}
      />
      <ConeElement
        coneParameters={coneParameters}
        requestStatus={requestStatus}
        setRequestStatus={setRequestStatus}
      />
    </div>
  );
}

export default App;
