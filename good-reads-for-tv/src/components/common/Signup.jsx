import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';

const Signup = ({visible, onClose}) => {
  if (!visible) {
    return null;
  }

  function handleClose(e) {
    if (e.target.id === 'login') {
      onClose();
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

  function handleSubmit(e) {
    e.preventDefault();

    // Submit to backend URL with axios
    axios
      .post('apiUrlString', {name, email, password, confirmPassword})
      .then(response => {
        console.log(response);
        // Toast notification Login Successful
      })
      .catch(err => {
        console.log(err);
      });

    // Submit to backend with fetch alternative
    const apiUrl = 'apiUrlString';
    const data = {name, email, password, confirmPassword};
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Toast notification Login Successful
      })
      .catch(error => {
        console.log(error);
      });

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    navigate('Pass to Home page route /');
  }

  return (
    <div
      id="login"
      onClick={handleClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
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
        <input
          className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer"
          type="submit"
          value="Sign Up"
        />
      </form>
    </div>
  );
};

export default Signup;
