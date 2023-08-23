import {useState} from 'react';
import Login from '../Login'

export default function UserAccess() {
  const [showLogin, setShowLogin] = useState(false);

  function handleOnClose() {
    return setShowLogin(false);
  }

  return (
    <div className="flex flex-wrap items-center">
        <button className="dft-btn round">Sign Up</button>
        <div>
        <button className="text-lg text-white" onClick={() => setShowLogin(true)}>
            Login
        </button>
        </div>
        <Login onClose={handleOnClose} visible={showLogin} />
    </div>
  );
}
