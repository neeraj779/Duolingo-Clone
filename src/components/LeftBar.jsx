import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const links = [
  {
    to: "/learn",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/784035717e2ff1d448c0f6cc4efc89fb.svg",
    label: "LEARN",
  },
  {
    to: "/character",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/597da4049ec7b1ee932d1b95ca424e0d.svg",
    label: "LETTERS",
  },
  {
    to: "/leaderboards",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/ca9178510134b4b0893dbac30b6670aa.svg",
    label: "LEADERBOARDS",
  },
  {
    to: "/quests",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7ef36bae3f9d68fc763d3451b5167836.svg",
    label: "QUESTS",
  },
  {
    to: "/",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/0e58a94dda219766d98c7796b910beee.svg",
    label: "SHOP",
  },
  {
    to: "/",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/24e0dcdc06870ead47b3600f0d41eb5b.svg",
    label: "PROFILE",
  },
  {
    to: "/",
    icon: "https://d35aaqx5ub95lt.cloudfront.net/vendor/7159c0b5d4250a5aea4f396d53f17f0c.svg",
    label: "MORE",
  },
];

const LeftbarLink = ({ to, icon, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center p-2 lg:pl-4 space-x-2 lg:space-x-5 ${
          isActive
            ? "text-[#1CB0F6] border-[#3f85a7] border-2"
            : "border-transparent border-2 hover:bg-[#202f36] transition-colors duration-200 text-white"
        } rounded-[12px] font-din-round`
      }
    >
      <img src={icon} alt={`${label} Icon`} className="w-8 h-8" />
      <span className="hidden lg:inline-block text-[15px]">{label}</span>
    </NavLink>
  );
};

const LeftBar = () => {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <div className="min-h-screen fixed w-[72px] lg:w-[256px] bg-[#131f24] border-r-2 border-gray-700 flex flex-col py-6 justify-between">
      <div>
        <div className="px-4 mt-2 mb-5 lg:px-8">
          <img
            className="block lg:hidden"
            alt="Duolingo Icon"
            width={40}
            height={40}
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/0cecd302cf0bcd0f73d51768feff75fe.svg"
          />
          <img
            className="hidden lg:block"
            alt="Duolingo Logo"
            width={128}
            height={30}
            src="https://d35aaqx5ub95lt.cloudfront.net/vendor/70a4be81077a8037698067f583816ff9.svg"
          />
        </div>

        <nav className="flex flex-col pt-2 pl-2 pr-2 space-y-3 lg:pl-4 lg:pr-4">
          {links.map(({ to, icon, label }) => (
            <LeftbarLink key={to} to={to} icon={icon} label={label} />
          ))}
        </nav>
      </div>

      {user && (
        <div className="px-4 pb-6 text-white lg:px-8">
          <p className="text-sm">Hello, {user.name}</p>
          <button
            onClick={logout}
            className="w-full mt-2 rounded-2xl border-b-4 border-[#1999d6] bg-[#48c0f8] px-10 py-2 text-center font-bold uppercase transition"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

LeftbarLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LeftBar;
