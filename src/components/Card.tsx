import { CardProps } from '../common/types/Card.types';

const Card: React.FC<CardProps> = ({ symbol, word }) => (
  <div className="flex flex-col items-center border-2 border-[#37464f] border-b-4 cursor-pointer text-[#4B4B4B] active:shadow-none active:translate-y-[5px] rounded-2xl pb-2 text-center w-[150px] md:w-[155px]">
    <h3 className="text-[18px] text-white font-din-round-light">{symbol}</h3>
    <p className="text-[#37464f] font-din-round-light text-[16px]">{word}</p>
    <div className="border-t-8 border-[#37464f] w-10 rounded-3xl"></div>
  </div>
);

export default Card;
