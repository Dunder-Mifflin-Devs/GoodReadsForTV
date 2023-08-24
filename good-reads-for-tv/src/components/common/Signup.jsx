import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg';

const Signup = ({ visible, onClose }) => {
  if (!visible) {
    return null;
  }

  function handleClose(e) {
    if (e.target.id === 'login') {
      onClose();
    }
  }

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // submit to backend URL with axios
    axios.post('apiUrlString', {name, email, password, confirmPassword})
    .then((response) => {
        console.log(response);
        //Toast notification Login Successful
    })
    .catch((err) => {
        console.log(err);
    })

    //Submit to backend with fetch alternative
    const apiUrl = 'apiUrlString';
    const data = { name, email, password, confirmPassword };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        //Toast notification Login Successful
    })
    .catch(error => {
        console.log(error);
    });

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    navigate('Pass to Home page route /')
  }

  return (
    <div 
        id="login" 
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
        <form 
            className="flex flex-col items-center justify-around bg-[--white] gap-4 p-8 rounded-lg w-72" 
            onSubmit={handleSubmit}>
            <div className='flex items-center justify-around'>
                <img className="mx-2 mb-2 h-14 bg-[--orange] rounded-lg" src={logo} />
                <h1 className="font-semibold text-center text-xl text-gray-700">Worth-A-Watch</h1>
            </div>
            <input
            className="bg-[white] text-black rounded-lg p-1"
            required
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleName}
            />
            <input
            className="bg-[white] text-black rounded-lg p-1"
            required
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
            <input
            className="bg-[white] text-black rounded-lg p-1"
            required
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            />
            <input
            className="bg-[white] text-black rounded-lg p-1"
            required
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            />
            <input
            className="bg-[--orange] text-black rounded-lg p-1 hover:text-[white] hover:underline cursor-pointer"
            disabled={!name || !email || !password || confirmPassword}
            type="submit"
            value="Sign Up"
            />
        </form>
    </div>
  );
};

export default Signup;






