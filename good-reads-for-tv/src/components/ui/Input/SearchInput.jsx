import {useState} from 'react';

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
      <form 
        className="flex items-center justify-center bg-[--black] p-2" 
        onSubmit={handleSubmit}>
        <input
          className="bg-[--gray] text-[white] rounded-l-lg w-2/4 p-1"
          required
          type="search"
          placeholder="Search Tv Series"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <input
          className="bg-[--orange] text-black rounded-r-lg w-24 p-1 hover:text-[white] hover:underline cursor-pointer"
          disabled={!search}
          type="submit"
          value="Search"
        />
      </form>
    </>
  );
};

export default SearchInput;
