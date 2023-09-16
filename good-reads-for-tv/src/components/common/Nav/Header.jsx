import Logo from './Logo';
import DropDown from './DropDown';
import UserAccess from './UserAccess';
import SearchInput from '../../ui/Input/SearchInput'

export default function Header() {


  return (
    <div className="bg-[var(--black)] border-b border-gray-600 border-opacity-30 flex w-full">
      <div className="container p-2 px-4 mx-auto">
        <div className="flex justify-between items-center py-5">
          <a href="/">
            <Logo />
          </a>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <DropDown />
              <UserAccess />
            </div>
          </div>
        </div>
        <SearchInput />
      </div>
    </div>
  );
}
