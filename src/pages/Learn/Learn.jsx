import "./learn.css";
import RightBar from "../../components/RightBar";
import LeftBar from "../../components/LeftBar";

const Learn = () => {
  return (
    <div className="flex min-h-screen bg-[#131f24]">
      <LeftBar />
      <div className="flex flex-col items-start flex-grow max-w-screen-lg mx-auto ml-36 lg:ml-[500px]">
        <div className="flex flex-col items-center mt-12">
          <div className="w-[300px] h-[92px] p-3 mt-4 bg-[#58cc05] rounded-lg text-white px-4 py-8">
            <div className="flex items-center">
              <div className="m-1">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/e013fd27fc6bd1d2fea85fe707b615cd.svg"
                  alt=""
                />
              </div>
              <span>SECTION 1,</span>
              <span>UNIT 1</span>
            </div>

            <div className="flex items-center">
              <h3 className="text-lg">Pair letters and sounds</h3>
            </div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div className="level-container">
              <div className="learn-level">
                <div className="unit__border--outer">
                  <div className="unit__border--inner">
                    <div className="unit__image-container">
                      <img
                        className="image--start"
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/ef9c771afdb674f0ff82fae25c6a7b0a.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container ml-15">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="container ml-24">
                <img
                  src="https://i.ibb.co/r3z7FVz/Screenshot-2024-10-05-at-4-31-38-PM.png"
                  className="w-32"
                  alt=""
                />
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full m-4 justify-evenly">
            <div className="w-1/3 h-px border border-[#37464f]"></div>
            <h5 className="text-gray-600">Great People</h5>
            <div className="w-1/3 h-px border border-[#37464f]"></div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div className="level-container">
              <div className="learn-level">
                <div className="unit__border--outer">
                  <div className="unit__border--inner">
                    <div className="unit__image-container">
                      <img
                        className="image--arrow"
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/5e4203031e39fc43d94371565fd0d369.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="container mr-24">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/a3e1fd17f6d11b10ecae6bf5bc1ca701.svg"
                  className="w-24"
                  alt=""
                />
              </div>
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full m-4 justify-evenly">
            <div className="w-1/3 h-px border border-gray-400"></div>
            <h5 className="text-gray-600">Great People</h5>
            <div className="w-1/3 h-px border border-gray-400"></div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div className="level-container">
              <div className="learn-level">
                <div className="unit__border--outer">
                  <div className="unit__border--inner">
                    <div className="unit__image-container">
                      <img
                        className="image--start"
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/5e4203031e39fc43d94371565fd0d369.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container ml-15">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
              <div className="container ml-24">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/350eb5e80d4ddc292088d0acc5ef3e2d.svg"
                  className="w-32"
                  alt=""
                />
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center w-full m-4 justify-evenly">
            <div className="w-1/3 h-px border border-[#37464f]"></div>
            <h5 className="text-gray-600">Great People</h5>
            <div className="w-1/3 h-px border border-[#37464f]"></div>
          </div>

          <div className="flex flex-col items-center mt-5">
            <div className="level-container">
              <div className="learn-level">
                <div className="unit__border--outer">
                  <div className="unit__border--inner">
                    <div className="unit__image-container">
                      <img
                        className="image--arrow"
                        src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/5e4203031e39fc43d94371565fd0d369.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="-ml-24 level-container">
              <div className="container mr-24">
                <img
                  src="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/c4419cac8477c25a1761abbf438cf531.svg"
                  className="w-32"
                  alt=""
                />
              </div>
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="ml-24 level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="level-container">
              <div className="learn-level">
                <div className="unit__image-container--inactive">
                  <img
                    className="image--start"
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center w-full m-4 justify-evenly">
              <div className="w-1/3 h-px border border-gray-400"></div>
              <h5 className="text-gray-600">Great People</h5>
              <div className="w-1/3 h-px border border-gray-400"></div>
            </div>

            <div className="flex flex-col items-center mt-5">
              <div className="level-container">
                <div className="learn-level">
                  <div className="unit__border--outer">
                    <div className="unit__border--inner">
                      <div className="unit__image-container">
                        <img
                          className="image--start"
                          src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/5e4203031e39fc43d94371565fd0d369.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="-ml-24 level-container">
                <div className="learn-level">
                  <div className="unit__image-container--inactive">
                    <img
                      className="image--start"
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="level-container ml-15">
                <div className="learn-level">
                  <div className="unit__image-container--inactive">
                    <img
                      className="image--start"
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/cbb0e971ac10030a120848c71c419892.svg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="container ml-24">
                  <img
                    src="https://d35aaqx5ub95lt.cloudfront.net/images/pathCharacters/dark/c45923336541ef5a8309a1758ff5ca91.svg"
                    className="w-32"
                    alt=""
                  />
                </div>
              </div>

              <div className="-ml-24 level-container">
                <div className="learn-level">
                  <div className="unit__image-container--inactive">
                    <img
                      className="image--start"
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/0ae912c0b7a66354a850e6733ef653cb.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>

              <div className="level-container">
                <div className="learn-level">
                  <div className="unit__image-container--inactive">
                    <img
                      className="image--start"
                      src="https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f4b1c683214cf55f5ddea4535b983745.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RightBar />
    </div>
  );
};

export default Learn;
