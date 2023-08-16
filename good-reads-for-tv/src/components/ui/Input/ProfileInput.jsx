import {useState} from 'react';

const ProfileInput = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userAddress: '',
    userPhone: '',
    userBirthday: '',
    userEmail: '',
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fakeAPICall(formData);
    } catch (err) {
      //  Can use an alert or toast to the user
      console.log('Error', err);
    }
    // sending to backend
    // toast notification
    setFormData({
      userName: '',
      userAddress: '',
      userPhone: '',
      userBirthday: '',
      userEmail: '',
    });
  };

  return (
    <>
<<<<<<< HEAD
      <form className="flex flex-col items-center justify-around bg-[#ECECEC] gap-2 p-2" onSubmit={handleSubmit}>
        <input
          className="bg-[#ffffff] text-black rounded-lg p-1 w-2/4"
=======
      <form 
        className="flex flex-col items-center justify-around bg-[--white] gap-2 p-2" 
        onSubmit={handleSubmit}>
        <input
          className="bg-[white] text-black rounded-lg p-1 w-2/4"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="text"
          placeholder="Name"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1 w-2/4"
=======
          className="bg-[white] text-black rounded-lg p-1 w-2/4"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="text"
          placeholder="Address"
          name="userAddress"
          value={formData.userAddress}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1 w-2/4"
=======
          className="bg-[white] text-black rounded-lg p-1 w-2/4"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="tel"
          placeholder="Phone Number"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
        />
        <input
<<<<<<< HEAD
          className="bg-[#ffffff] text-black rounded-lg p-1 w-2/4"
=======
          className="bg-[white] text-black rounded-lg p-1 w-2/4"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="date"
          placeholder="Birthdate"
          name="userBirthday"
          value={formData.userBirthday}
          onChange={handleChange}
        />
<<<<<<< HEAD
        <input
          className="bg-[#ffffff] text-black rounded-lg p-1 w-2/4"
=======
         <input
          className="bg-[white] text-black rounded-lg p-1 w-2/4"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="email"
          placeholder="Email"
          name="userEmail"
          value={formData.userEmail}
          onChange={handleChange}
        />

<<<<<<< HEAD
        <input className="bg-[#F2A365] text-black rounded-lg p-1" disabled type="submit" value="Create Profile" />
=======
        <input 
            className="bg-[--orange] text-black rounded-lg p-1 hover:text-[white] hover:underline cursor-pointer" 
            disabled 
            type="submit" 
            value="Create Profile" 
        />
>>>>>>> 95b2517 (Changed styling to the base style varibles)
      </form>
    </>
  );
};

export default ProfileInput;