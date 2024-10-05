import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

import Data from "../utils/englishCharData";

const Card = ({ symbol, word }) => (
  <div className="flex flex-col items-center border-2 border-[#37464f] border-b-4 cursor-pointer text-[#4B4B4B] active:shadow-none active:translate-y-[5px] rounded-2xl pb-2 text-center w-[150px] md:w-[155px]">
    <h3 className="text-[18px] text-white font-din-round-light">{symbol}</h3>
    <p className="text-[#37464f] font-din-round-light text-[16px]">{word}</p>
    <div className="border-t-8 border-[#37464f] w-10 rounded-3xl"></div>
  </div>
);

const Section = ({ title, items }) => (
  <div className="w-full max-w-4xl ml-8 text-center">
    <div className="flex items-center justify-center mt-5">
      <div className="w-full mx-2 border-t-2 border-gray-300 opacity-60 ml-14"></div>
      <h2 className="text-[20px] font-din-round text-[#4B4B4B] font-bold text-center">
        {title}
      </h2>
      <div className="w-full mx-2 border-t-2 border-gray-300 opacity-60 mr-14"></div>
    </div>
    <div className="grid w-[478px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ml-4 mt-4 mb-5">
      {items.map((item, idx) => (
        <Card key={idx} symbol={item.symbol} word={item.word} />
      ))}
    </div>
  </div>
);

const Character = () => {
  const { title, subtitle, button, sections } = Data;

  return (
    <div className="flex min-h-screen justify-items-start bg-[#131f24]">
      <LeftBar />
      <div className="ml-[400px] mt-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center p-8 ml-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-4 font-din-round text-[#4B4B4B] text-center">
              {title}
            </h1>
            <p className="mb-5 text-lg text-center text-gray-500 font-din-round-light">
              {subtitle}
            </p>
            <button
              className="bg-[#1CB0F6] text-white shadow-[0_5px_0_#1999D6] font-din-round text-[16px] font-bold px-28 py-[10px] rounded-2xl active:shadow-none active:translate-y-[5px] hover:bg-sky-400 transition"
              onClick={() => (window.location.href = button.link)} // Navigation logic can be implemented
            >
              {button.label}
            </button>
          </div>
          {sections.map((section, index) => (
            <Section key={index} title={section.title} items={section.items} />
          ))}
        </div>
      </div>
      <RightBar />
    </div>
  );
};

export default Character;
