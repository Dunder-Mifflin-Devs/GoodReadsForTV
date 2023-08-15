import { useState } from "React"
const LoginInput = () => {
    
        
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
    
  
        function handleSubmit(e) {
            e.preventDefault()
            // submit to backend URL
            alert('Form Submitted')
            setEmail('')
            setPassword('')
    
        }
      return (
        <>
            <form className='flex flex-col items-center justify-around bg-[#ECECEC]' onSubmit={handleSubmit}>  
                <input className='bg-[#ffffff] text-black rounded-lg' required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className='bg-[#ffffff] text-black rounded-lg' required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className='bg-[#F2A365] text-black rounded-lg' disabled={!email || !password} type="submit" value='Send Message'/>
            </form>
        </>
      )
    };
    
export default LoginInput;
