import {useState} from 'react';
import Login from './Login';
import logo from '../../assets/images/logo.svg';

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  function handleOnClose() {
    return setShowLogin(false);
  }

  return (
    <div className="bg-[var(--gray)] border-b border-gray-600 border-opacity-30 flex w-full">
      <div className="container p-2 px-4 mx-auto">
        <div className="flex justify-between items-center py-5">
          <div className="flex items-center">
            {/* <span className="bg-white mx-2 p-2 h-14 rounded-full">LOGO</span> */}
            <img className="mx-2 mb-2 h-14" src={logo} />
            <div className="flex flex-col">
              <h1 className="text-2xl text-white font-lisu">Worth a Watch</h1>
              <p className="text-white font-lisu">Every show is worth your time</p>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-8">
                  <li className="mr-14 text-2xl text-white hover:text-gray-200 tracking-tight">Movies</li>
                  <li className="mr-14 text-2xl text-white hover:text-gray-200 tracking-tight">TV Shows</li>
                </ul>
              </div>
              <button className="dft-btn round">Sign Up</button>
              <div>
                <button className="text-lg text-white" onClick={() => setShowLogin(true)}>
                  Login
                </button>
              </div>
              <Login onClose={handleOnClose} visible={showLogin} />
            </div>
          </div>
        </div>
      </div>
      {/* search module */}
    </div>
  );
}
