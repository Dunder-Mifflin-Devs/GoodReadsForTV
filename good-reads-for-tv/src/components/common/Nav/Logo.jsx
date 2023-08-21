import logo from '../../../assets/images/Logo.svg';

export default function Logo() {

  return (
    <div className="flex items-center">
        {/* <span className="bg-white mx-2 p-2 h-14 rounded-full">LOGO</span> */}
        <img className="mx-2 mb-2 h-14" src={logo} />
        <div className="flex flex-col">
            <h1 className="text-2xl text-white font-lisu">Worth a Watch</h1>
            <p className="text-white font-lisu">Every show is worth your time</p>
        </div>
    </div>
  );
}
