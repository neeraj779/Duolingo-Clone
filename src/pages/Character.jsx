import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";
import Section from "../components/Section";
import Data from "../utils/englishCharData";

const Character = () => {
  const { sections } = Data;

  return (
    <div className="flex min-h-screen justify-items-start bg-[#131f24]">
      <LeftBar />
      <div className="ml-[400px] mt-5">
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center p-8 ml-6">
            <h1 className="mb-4 text-2xl font-bold text-center text-white md:text-3xl font-din-round">
              Let&apos;s learn English!
            </h1>
            <p className="mb-5 text-lg text-center text-gray-300 font-din-round-light">
              Get to know the characters and sounds of English.
            </p>
            <button className="bg-[#1CB0F6] text-white shadow-[0_5px_0_#1999D6] font-din-round text-[16px] font-bold px-28 py-[10px] rounded-2xl active:shadow-none active:translate-y-[5px] hover:bg-sky-400 transition">
              START +10 XP
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
