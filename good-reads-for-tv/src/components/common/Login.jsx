import {useState} from 'react';
// import {useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import {RiCloseCircleFill} from 'react-icons/ri';
// import axios from 'axios'
// import { useGoogleLogin } from '@react-oauth/google';
import { FcGoogle } from 'react-icons/fc';

const Login = ({setShowLogin}) => {

  //Google Oauth Login
  // const login = useGoogleLogin({
  //   onSuccess: tokenResponse => console.log(tokenResponse),
  // });

  function handleClose(e) {
    if (e.target.id === 'login') {
      setShowLogin(false);
    }
  }

  // const navigate = useNavigate();

  const [formData, setFormData] = useState({email: '', password: ''});

  function handleChange(e) {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.password !== formData.password) {
      setFormData(prevFormData => {
        return {
          ...prevFormData,
          password: '',
        };
      });
      return;
    } 

    // try {
      // const res = await axios.post('api url', { name, email, password });
      // console.log(res);
      // console.log(res.data);
      // console.log(res.data.message)
      // console.log(res.data.success)
      
      // if (res.data.success === false) {
      // } else {
      //   window.sessionStorage.setItem('userName', res.data.userName)
      //   window.sessionStorage.setItem('userId', res.data.id)
      //   navigate('/home');
      //   // Redirect or show success message
      // }

  //   } catch (err) {
  //     console.error(err);
  //     // Handle error, show error message, etc.
  //   }
  };

  return (
    <div
      id="login"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex flex-col items-center justify-center z-50"
    >
      <div className='flex items-center justify-end w-72 p-2'>
        <RiCloseCircleFill 
          onClick={() => setShowLogin(false)}
          className='text-[--orange] text-2xl cursor-pointer'
        />
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
        />
        <input
          className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer"
          type="submit"
          value="Sign In"
          disabled={!formData.email || !formData.password}
        />
        <div 
          className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer flex items-center gap-2"
          onClick={() => login()}>
          <FcGoogle /> Log in with Google
        </div>
      </form>
    </div>
  );
};

export default Login;
