import PropTypes from "prop-types";
import flagsSvg from "../assets/svg/flags.svg";

export const Flag = ({ language, width = 84 }) => {
  const height = width * (19.3171 / 24);
  return (
    <svg viewBox={language.viewBox} style={{ height, width }}>
      <image href={flagsSvg}></image>
    </svg>
  );
};

Flag.propTypes = {
  language: PropTypes.shape({
    viewBox: PropTypes.string.isRequired,
  }).isRequired,
  width: PropTypes.number,
};
