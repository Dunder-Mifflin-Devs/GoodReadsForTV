import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import {RiCloseCircleFill} from 'react-icons/ri';
// import { useGoogleLogin } from '@react-oauth/google';
import {FcGoogle} from 'react-icons/fc';
import {postSignup} from '../../axios';

const Signup = ({setShowSignup}) => {
  //Google Oauth Login
  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });

  function handleClose(e) {
    if (e.target.id === 'signup') {
      setShowSignup(false);
    }
  }

  const navigate = useNavigate();

  const [formData, setFormData] = useState({name: '', email: '', password: '', confirmPassword: ''});

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          password: '',
          confirmPassword: '',
        };
      });

      return;
    }

    try {
      const response = await postSignup(formData);
      console.log(response);

      setShowSignup(false);
      navigate('/');
    } catch (err) {}
  };

  return (
    <div
      id="signup"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-50"
    >
      <div className="flex items-center justify-end w-72 p-2">
        <RiCloseCircleFill onClick={() => setShowSignup(false)} className="text-[--orange] text-2xl cursor-pointer" />
      </div>
      <form
        className="flex flex-col items-center justify-around bg-[--white] gap-4 p-8 rounded-lg w-72"
        onSubmit={handleSubmit}
      >
        <div className="flex items-center justify-around">
          <img className="mx-2 mb-2 h-14 bg-[--orange] rounded-lg" src={logo} />
          <h1 className="font-semibold text-center text-xl text-gray-700">Worth a Watch</h1>
        </div>
        <input
          name="name"
          className="bg-[white] text-black rounded-lg p-1"
          required
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          name="email"
          className="bg-[white] text-black rounded-lg p-1"
          required
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          name="password"
          className="bg-[white] text-black rounded-lg p-1"
          required
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          style={{
            backgroundColor:
              formData.confirmPassword === '' || formData.password === formData.confirmPassword
                ? ''
                : 'rgba(255,0,0,0.1)',
          }}
        />
        <input
          name="confirmPassword"
          className="bg-[white] text-black rounded-lg p-1"
          required
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          style={{
            backgroundColor:
              formData.confirmPassword === '' || formData.password === formData.confirmPassword
                ? ''
                : 'rgba(255,0,0,0.1)',
          }}
        />
        {formData.confirmPassword !== '' && formData.password !== formData.confirmPassword && (
          <span className="text-red-600 text-xs leading-none">Passwords don't match</span>
        )}
        <input
          className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer"
          type="submit"
          value="Sign Up"
          disabled={!formData.name || !formData.email || !formData.password || !formData.confirmPassword}
        />
        <div
          className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer flex items-center gap-2"
          onClick={() => login()}
        >
          <FcGoogle /> Log in with Google
        </div>
      </form>
    </div>
  );
};

export default Signup;
