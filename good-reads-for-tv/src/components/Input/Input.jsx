import { useState } from "React"
const Input = () => {
    
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
    
        function handleName(event) {
            setName(event.target.value)
        }
        function handleSubmit(e) {
            e.preventDefault()
            // submit to backend URL
            alert('Form Submitted')
            setName('')
            setEmail('')
    
        }
      return (
        <>
            <form className={} onSubmit={handleSubmit}>
                <input className={} required type="text" placeholder="Name" value={name} onChange={handleName}/>
                <input className={} required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className={} disabled={!name || !email} type="submit" value='Send Message'/>
            </form>
        </>
      )
    };
    
export default Input;
