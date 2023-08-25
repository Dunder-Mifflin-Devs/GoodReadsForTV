import logo from '../../assets/images/logo.svg';

export default function Login({visible, onClose}) {
  function handleOnClose(e) {
    if (e.target.id === 'login') {
      onClose();
    }
  }

  if (!visible) {
    return null;
  }

  return (
    <div
      id="login"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
    >
      <form 
        className="flex flex-col items-center justify-around bg-[--white] gap-4 p-8 rounded-lg w-72" 
      >
          <div className='flex items-center justify-around'>
              <img className="mx-2 mb-2 h-14 bg-[--orange] rounded-lg" src={logo} />
              <h1 className="font-semibold text-center text-xl text-gray-700">Worth a Watch</h1>
          </div>
          <div className="flex flex-col justify-around gap-4 p-8">
            <input 
              type="text" 
              className="bg-[white] text-black rounded-lg p-1" 
              placeholder="email@example.com" />
            <input 
              type="text" 
              className="bg-[white] text-black rounded-lg p-1" 
              placeholder="********" />
          </div>
          <div className="text-center">
            <button 
              className="bg-[--orange] text-black rounded-lg px-6 py-1 hover:text-[white] hover:underline cursor-pointer">
              Sign in
            </button>
          </div>
      </form>
    </div>
  );
}
