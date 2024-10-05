import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

const Shop = () => {
  return (
    <div className="flex min-h-screen bg-[#131f24]">
      <LeftBar />

      <div className="flex flex-col ml-[400px] mt-5 relative">
        <div className="absolute top-0 left-0 z-10 w-full p-6 rounded-lg">
          <div className="mb-6">
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold text-center text-white">
                You earned 500 gems! Create a profile to spend them in the
                store!
              </p>
              <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600">
                Create a profile
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-lg opacity-50">
          <h2 className="mb-2 text-xl font-bold text-white">Hearts</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-4">
              <img
                className="w-12 h-12"
                src="https://d35aaqx5ub95lt.cloudfront.net/images/hearts/547ffcf0e6256af421ad1a32c26b8f1a.svg"
                alt="Hearts"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <button
                      className="px-4 py-2 text-gray-600 bg-gray-300 rounded disabled"
                      disabled
                      data-test="purchase-button"
                    >
                      Full
                    </button>
                    <div className="text-sm text-gray-500">Refill Hearts</div>
                  </div>
                  <div className="text-sm text-gray-700">
                    Get full hearts so you can worry less about making mistakes
                    in a lesson
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <h2
          className="mt-6 mb-2 text-xl font-bold text-white"
          data-test="shop-section"
        >
          Power-Ups
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-4">
            <span
              className="w-12 h-12 bg-gray-200 rounded"
              data-test="purchase-icon"
            ></span>
            <div className="flex-1">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                data-test="purchase-button"
              >
                Get for: <span className="font-bold">200</span>
              </button>
              <div className="text-sm text-gray-500">Streak Freeze</div>
              <div className="text-xs text-gray-500">0 / 2 equipped</div>
              <p className="text-sm text-gray-700">
                Streak Freeze allows your streak to remain in place for one full
                day of inactivity.
              </p>
            </div>
          </li>
          <li className="flex items-center space-x-4">
            <span
              className="w-12 h-12 bg-gray-200 rounded"
              data-test="purchase-icon"
            ></span>
            <div className="flex-1">
              <button
                className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600"
                data-test="purchase-button"
              >
                Get for: <span className="font-bold">50</span>
              </button>
              <div className="text-sm text-gray-500">Double or Nothing</div>
              <p className="text-sm text-gray-700">
                Double your 50 gem wager by maintaining a 7 day streak.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <RightBar />
    </div>
  );
};

export default Shop;
