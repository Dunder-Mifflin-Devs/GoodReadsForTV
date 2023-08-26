import {useState} from 'react';
import Login from '../Login'
import Signup from '../Signup';


export default function UserAccess() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  function handleOnClose() {
    return setShowLogin(false);
  }
  
  function handleClose() {
    return setShowSignup(false);
  }

  return (
    <div className="flex flex-wrap items-center">
        <button 
          className="dft-btn round"
          onClick={() => setShowSignup(true)}>
          Sign Up
        </button>
        <div>
        <button className="text-lg text-white" onClick={() => setShowLogin(true)}>
            Login
        </button>
        </div>
        <Login onClose={handleOnClose} visible={showLogin} />
        <Signup onClose={handleClose} visible={showSignup}/>
    </div>
  );
}
