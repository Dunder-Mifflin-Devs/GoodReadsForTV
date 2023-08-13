import { useState } from 'React'

const ProfileInput = () => {

    const [formData, setFormData] = useState(
        {
            userName: '',
            userAddress: '',
            userPhone: '',
            userBirthday: '',
            userEmail: ''
        }
    )

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => (
            {
                ...prevData,
                [name]: value
            }
        ))
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        try {
            const response = await fakeAPICall(formData)
        } catch (err) {
            //  Can use an alert or toast to the user
            console.log('Error', err)
        }
        // sending to backend
        // toast notification
        setFormData(
            {
                userName: '',
                userAddress: '',
                userPhone: '',
                userBirthday: '',
                userEmail: ''
            }
        )
    }

  return (
    <>
        <form className='flex flex-col items-center justify-around bg-[#ECECEC]' onSubmit={handleSubmit}>
            <input className='bg-[#ffffff] text-black rounded-lg' required type="text" placeholder="Name" name='userName' value={formData.userName} onChange={handleChange}/>
            <input className='bg-[#ffffff] text-black rounded-lg' required type="text" placeholder="Address" name='userAddress' value={formData.userAddress} onChange={handleChange}/>
            <input className='bg-[#ffffff] text-black rounded-lg' required type="tel" placeholder="Phone Number" name='userPhone' value={formData.userPhone} onChange={handleChange}/>
            <input className='bg-[#ffffff] text-black rounded-lg' required type="date" placeholder="Birthdate" name='userBirthday' value={formData.userBirthday} onChange={handleChange}/>
            <input className='bg-[#ffffff] text-black rounded-lg' required type="email" placeholder="Email" name='userEmail' value={formData.userEmail} onChange={handleChange}/>

            <input className='bg-[#F2A365] text-black rounded-lg' disabled type="submit" value='Send Message'/>
        </form>
    </>
  )
};

export default ProfileInput;
