import {useState} from 'react';

const SignupInput = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function handleName(event) {
    setName(event.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // submit to backend URL
    alert('Form Submitted');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
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
          className="bg-[white] text-black rounded-lg p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleName}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1"
=======
          className="bg-[white] text-black rounded-lg p-1"
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
          className="bg-[white] text-black rounded-lg p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1"
=======
          className="bg-[white] text-black rounded-lg p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <input
<<<<<<< HEAD
          className="bg-[#F2A365] text-black rounded-lg p-1"
=======
          className="bg-[--orange] text-black rounded-lg p-1 hover:text-[white] hover:underline cursor-pointer"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          disabled={!name || !email || !password || confirmPassword}
          type="submit"
          value="Sign Up"
        />
      </form>
    </>
  );
};

<<<<<<< HEAD
export default SignupInput;
=======
export default SignupInput;
>>>>>>> 95b2517 (Changed styling to the base style varibles)
