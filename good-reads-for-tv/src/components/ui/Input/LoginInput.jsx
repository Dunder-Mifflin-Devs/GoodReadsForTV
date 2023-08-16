<<<<<<< HEAD
import {useState} from 'react';
=======
import { useState } from "react"
>>>>>>> 95b2517 (Changed styling to the base style varibles)

const LoginInput = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // submit to backend URL
    alert('Form Submitted');
    setEmail('');
    setPassword('');
  }
  return (
    <>
<<<<<<< HEAD
      <form className="flex flex-col items-center justify-around bg-[#ECECEC] gap-2 p-2" onSubmit={handleSubmit}>
        <input
          className="bg-[#ffffff] text-black rounded-lg p-1"
=======
      <form 
        className="flex flex-col items-center justify-around bg-[--white] gap-2 p-2" 
        onSubmit={handleSubmit}>
        <input
          className="bg-[--white] text-black rounded-lg p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1"
=======
          className="bg-[--white] text-black rounded-lg p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
<<<<<<< HEAD
          className="bg-[#F2A365] text-black rounded-lg p-1"
=======
          className="bg-[--orange] text-black rounded-lg p-1 hover:text-[white] hover:underline cursor-pointer"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          disabled={!email || !password}
          type="submit"
          value="Login"
        />
      </form>
    </>
  );
};

export default LoginInput;
