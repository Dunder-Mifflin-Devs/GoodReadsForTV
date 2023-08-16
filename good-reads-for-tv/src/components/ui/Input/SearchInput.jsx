import {useState} from 'react';

<<<<<<< HEAD
=======

>>>>>>> 95b2517 (Changed styling to the base style varibles)
const SearchInput = () => {
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    // submit to backend URL
    alert('Form Submitted');
    setSearch('');
  }
  return (
    <>
<<<<<<< HEAD
      <form className="flex items-center justify-center bg-[#222831] p-2" onSubmit={handleSubmit}>
        <input
          className="bg-[#526980] text-[#ECECEC] rounded-l-lg w-2/4 p-1"
=======
      <form 
        className="flex items-center justify-center bg-[--black] p-2" 
        onSubmit={handleSubmit}>
        <input
          className="bg-[--gray] text-[white] rounded-l-lg w-2/4 p-1"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          required
          type="search"
          placeholder="Search Tv Series"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input
<<<<<<< HEAD
          className="bg-[#F2A365] text-black rounded-r-lg w-1/4 p-1"
=======
          className="bg-[--orange] text-black rounded-r-lg w-24 p-1 hover:text-[white] hover:underline cursor-pointer"
>>>>>>> 95b2517 (Changed styling to the base style varibles)
          disabled={!search}
          type="submit"
          value="Search"
        />
      </form>
    </>
  );
};

<<<<<<< HEAD
export default SearchInput;
=======
export default SearchInput;
>>>>>>> 95b2517 (Changed styling to the base style varibles)
