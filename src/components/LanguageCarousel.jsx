import { Link } from "react-router-dom";
import React from "react";
import PropTypes from "prop-types";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import languages from "../utils/languages";
import { Flag } from "./Flag";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
export const LanguageCarousel = () => {
  return (
    <article className="absolute bottom-0 left-0 right-0 items-center justify-center hidden h-20 text-black md:flex">
      <div className="w-full max-w-5xl">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
          {languages.map((language) => (
            <LanguageItem key={language.code} language={language} />
          ))}
        </ScrollMenu>
      </div>
    </article>
  );
};

const LanguageItem = ({ language }) => {
  return (
    <div className="flex items-center justify-center mx-4">
      {" "}
      <Link className="flex items-center gap-2" to="/learn">
        <Flag language={language} width={40} />
        <span className="text-sm font-bold uppercase text-[#777777]">
          {language.name}
        </span>
      </Link>
    </div>
  );
};

LanguageItem.propTypes = {
  language: PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const LeftArrow = () => {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);
  return (
    <button
      className="opacity-50"
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      <MdOutlineKeyboardArrowLeft className="text-2xl text-[#afafaf] mr-9" />
      <span className="sr-only">Scroll left</span>
    </button>
  );
};

const RightArrow = () => {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);
  return (
    <button
      className="opacity-50"
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      <MdOutlineKeyboardArrowRight className="text-2xl text-[#afafaf] ml-9" />
      <span className="sr-only">Scroll right</span>
    </button>
  );
};
