import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const Leaderboards = () => {
  return (
    <div className="flex min-h-screen justify-items-start bg-[#131f24]">
      <LeftBar />

      <div className="ml-[400px] mt-5">
        <div className="flex flex-col items-center justify-center mt-4 quest">
          <div className="flex flex-col items-center">
            <img
              src="https://d35aaqx5ub95lt.cloudfront.net/images/leagues/660a07cd535396f03982f24bd0c3844a.svg"
              alt=""
            />
            <h2 className="text-white">Unlock Leaderboards!</h2>

            <h5 className="m-1 text-white">
              Complete 10 more lessons to start competing
            </h5>
            <div className="m-1 large_buttons">
              <div className="grid">
                <button
                  type="button"
                  className="w-full border-2 border-[#37464f] border-b-4 rounded-2xl p-2 text-[#48c0f8]"
                >
                  START A LESSON
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full">
          <img
            className="w-[592px] h-[327px]"
            src="https://i.ibb.co/Dt846TQ/Screenshot2024-10-041.png"
            alt=""
          />
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Leaderboards;
