import flagsSvg from "../assets/svg/flags.svg";
import { FlagProps } from "../common/types/Flag.types";

export const Flag: React.FC<FlagProps> = ({ language, width = 84 }) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <image href={flagsSvg}></image>
    </svg>
  );
};
