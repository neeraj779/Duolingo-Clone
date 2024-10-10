import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import clockSVG from "../assets/svg/clock.svg";

const Quests = () => {
  return (
    <div className="flex min-h-screen bg-[#131f24]">
      <LeftBar />

      <div className="flex flex-col ml-[400px] mt-5">
        <div className="flex flex-col items-center justify-center mt-4 quest">
          <div className="bg-[#9069cd] rounded-2xl flex items-center p-3 w-[592px] h-[232px]">
            <div className="flex flex-col items-start justify-start">
              <h4 className="m-3 text-2xl font-extrabold">Welcome!</h4>
              <span className="m-3 text-[#1f2937] text-start">
                Complete quests to earn rewards! Quests refresh every day.
              </span>
            </div>
            <div className="flex-shrink-0">
              <img
                src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/64d0bbcd8f4e6d5018502540f1e0094b.svg"
                alt=""
                className="ml-4"
              />
            </div>
          </div>
        </div>

        {/* Quest Section */}
        <div className="w-3/4 mt-4">
          {" "}
          {/* Adjusted margin to mt-4 for spacing */}
          <div className="flex items-center justify-between w-full">
            <span className="text-2xl text-white font-extralight">
              Daily Quest
            </span>
            <span className="flex items-center text-2xl text-[#ffab32] font-extralight">
              <img src={clockSVG} className="w-6 h-6 mr-2" alt="Clock Icon" />6
              HOURS
            </span>
          </div>
          <div className="p-3 mt-2 border-2 border-[#37464f] rounded-2xl w-[592px] h-[113px]">
            <div className="flex mt-3 mb-3">
              <div className="w-16">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/2b5a211d830a24fab92e291d50f65d1d.svg"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold text-white font-din-round">
                  Earn 10 XP
                </p>
                <div className="flex items-center justify-between mt-2">
                  <div className="w-[417px] h-[20px] bg-[#37464f] rounded-full rounded-tr-none rounded-br-none">
                    <p className="font-din-round absolute text-gray-400  mx-[85px] text-[14px]">
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
          <div className="p-3 mt-2 border-2 border-[#37464f] bg-[#202f36] rounded-2xl w-[592px] h-[113px]">
            <div className="flex mt-3 mb-3">
              <div className="w-16">
                <img
                  className="-mt-1"
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/goals/b4d50b5a518e587420bed74bcb381ac4.svg"
                  alt=""
                />
              </div>
              <div className="flex items-center justify-start w-3/4 font-bold text-center text-[#52656d] text-wrap">
                More quests unlock soon
              </div>
            </div>
          </div>
        </div>

        <RightBar />
      </div>
    </div>
  );
};

export default Quests;
