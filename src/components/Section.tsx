import Card from "./Card";
import { SectionProps } from "../common/types/Section.types";

const Section: React.FC<SectionProps> = ({ title, items }) => (
  <div className="w-full max-w-4xl ml-8 text-center">
    <div className="flex items-center justify-center mt-5">
      <div className="w-full mx-2 border-t-2 border-gray-300 opacity-60 ml-14"></div>
      <h2 className="text-[20px] font-din-round text-[#4B4B4B] font-bold text-center">
        {title}
      </h2>
      <div className="w-full mx-2 border-t-2 border-gray-300 opacity-60 mr-14"></div>
    </div>
    <div className="grid w-[478px] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ml-4 mt-4 mb-5">
      {items.map((item, id) => (
        <Card key={id} symbol={item.symbol} word={item.word} />
      ))}
    </div>
  </div>
);

export default Section;
