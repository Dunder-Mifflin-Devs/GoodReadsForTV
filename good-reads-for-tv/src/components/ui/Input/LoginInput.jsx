import {useState} from 'react';

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
      <form className="flex flex-col items-center justify-around bg-[#ECECEC] gap-2 p-2" onSubmit={handleSubmit}>
        <input
          className="bg-[#ffffff] text-black rounded-lg p-1"
          required
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="bg-[#ffffff] text-black rounded-lg p-1"
          required
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          className="bg-[#F2A365] text-black rounded-lg p-1"
          disabled={!email || !password}
          type="submit"
          value="Login"
        />
      </form>
    </>
  );
};

export default LoginInput;
