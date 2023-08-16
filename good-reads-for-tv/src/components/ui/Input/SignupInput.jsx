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
      <form 
        className="flex flex-col items-center justify-around bg-[--white] gap-2 p-2" 
        onSubmit={handleSubmit}>
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
    </>
  );
};

export default SignupInput;
