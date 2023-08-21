import Logo from './Logo';
import DropDown from './DropDown';
import UserAccess from './UserAccess';

export default function Header() {

  return (
    <div className="bg-[var(--gray)] border-b border-gray-600 border-opacity-30 flex w-full">
      <div className="container p-2 px-4 mx-auto">
        <div className="flex justify-between items-center py-5">
          <Logo />
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <DropDown />
              <UserAccess />
            </div>
          </div>
        </div>
      </div>
      {/* search module */}
    </div>
  );
}
