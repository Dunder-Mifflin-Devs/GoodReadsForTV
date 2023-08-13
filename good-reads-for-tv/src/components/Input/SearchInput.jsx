import { useState } from "React"
const SearchInput = () => {
    
        const [search, setSearch] = useState('')
    
        function handleSubmit(e) {
            e.preventDefault()
            // submit to backend URL
            alert('Form Submitted')
            setSearch('')
    
        }
      return (
        <>
            <form className='flex items-center justify-center bg-[#222831]' onSubmit={handleSubmit}>
                <input className='bg-[#526980] text-[#ECECEC] rounded-lg' required type="search" placeholder="Search Tv Series" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <input className='bg-[#F2A365] text-black rounded-lg' disabled={!search} type="submit" value='Send Message'/>
            </form>
        </>
      )
    };
    
export default SearchInput;