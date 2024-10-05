import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import Footer from "./Footer";
import { useAuth } from "../hooks/useAuth";

const RightBar = () => {
  const { user } = useAuth();

  return (
    <div className="fixed right-0 w-full max-w-[380px] p-4 mr-12 lg:mr-32 hidden md:block bg-[#131f24]">
      <>
        <TopBar />
        <div className="bg-[#131f24] rounded-2xl p-5 pt-4 pb-6 mb-4 border-2 border-[#37464f]">
          <h2 className="text-lg font-bold tracking-wide text-white font-din-round">
            Unlock Leaderboards!
          </h2>
          <div className="flex items-center space-x-4 mt-[30px] ml-3">
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/d4280fdf64d66de7390fe84802432a53.svg"
              alt="lock"
              className="h-12 w-14"
            />
            <p className="pl-4 text-white font-din-round-light">
              Complete 10 more lessons to start competing
            </p>
          </div>
        </div>
        <div className="bg-[#131f24] rounded-2xl p-4 mb-4 border-2 border-[#37464f]">
          <div className="flex justify-between">
            <h2 className="text-lg font-bold text-white font-din-round">
              Daily Quests
            </h2>
            <Link
              to="/quests"
              className="text-[#1CB0F6] font-din-round text-sm"
            >
              VIEW ALL
            </Link>
          </div>
          <div className="flex items-center p-2 mt-2">
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
              alt="quest"
              className="w-16 h-16"
            />
            <div className="mt-2 ml-4">
              <p className="font-bold text-white font-din-round">Earn 10 XP</p>
              <div className="flex items-center justify-between mt-2">
                <div className="w-[200px] h-[20px] bg-[#37464f] rounded-full rounded-tr-none rounded-br-none">
                  <p className="font-din-round absolute text-gray-400 mx-[85px] text-[14px]">
                    0 / 10
                  </p>
                  <div className="top-0 left-0 w-[0%] h-full bg-yellow-400 rounded-full text-sm"></div>
                </div>
                <img
                  className="w-8 ml-1 h-9"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/df7eda7cc1cc833ba30cd1e82781b68f.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center tracking-normal bg-[#131f24] rounded-2xl p-4 pb-5 border-2 border-[#37464f]">
          <h2 className="mb-6 text-lg font-bold text-white font-din-round">
            Create a profile to save your progress!
          </h2>
          <Link to={user ? "/welcome" : "/register"} className="w-full">
            <button
              type="submit"
              className="tracking-wider bg-[#58cc05] text-white font-bold py-3 w-full rounded-2xl shadow-[0_5px_0_#58a700] font-din-round text-[14px] hover:bg-[#58cc02]/90 active:shadow-none active:translate-y-[5px] transition-all duration-150 ease-in-out"
            >
              CREATE A PROFILE
            </button>
          </Link>
          {!user && (
            <Link to="/login" className="w-full mt-4">
              <button className="bg-[#1CB0F6] text-white tracking-wider shadow-[0_5px_0_#1999D6] font-din-round text-[14px] font-bold w-full py-3 rounded-2xl active:shadow-none active:translate-y-[5px] hover:bg-sky-400 transition">
                SIGN IN
              </button>
            </Link>
          )}
        </div>
        <Footer />
      </>
    </div>
  );
};

export default RightBar;
