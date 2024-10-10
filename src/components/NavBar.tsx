import { LanguageDropDown } from "./LanguageDropDown";

const NavBar = () => {
  return (
    <nav className="fixed top-0 z-20 w-full bg-white">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl p-4 mx-64">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://d35aaqx5ub95lt.cloudfront.net/images/splash/f92d5f2f7d56636846861c458c0d0b6c.svg"
            className="h-8"
            alt="Logo"
          />
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <LanguageDropDown />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
