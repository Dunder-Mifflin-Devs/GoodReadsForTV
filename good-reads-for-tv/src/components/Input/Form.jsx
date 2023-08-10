import { useState } from 'React'

const Form2 = () => {

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
        <form className={} onSubmit={handleSubmit}>
            <input className={} required type="text" placeholder="Name" name='userName' value={formData.userName} onChange={handleChange}/>
            <input className={} required type="text" placeholder="Address" name='userAddress' value={formData.userAddress} onChange={handleChange}/>
            <input className={} required type="tel" placeholder="Phone Number" name='userPhone' value={formData.userPhone} onChange={handleChange}/>
            <input className={} required type="date" placeholder="Birthdate" name='userBirthday' value={formData.userBirthday} onChange={handleChange}/>
            <input className={} required type="email" placeholder="Email" name='userEmail' value={formData.userEmail} onChange={handleChange}/>

            <input className={} disabled type="submit" value='Send Message'/>
        </form>
    </>
  )
};

export default Form2;
