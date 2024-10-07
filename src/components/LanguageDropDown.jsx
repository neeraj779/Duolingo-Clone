import { useState } from "react";
import languages from "../utils/languages";
import { Flag } from "./Flag";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

export const LanguageDropDown = () => {
  const [languagesShown, setLanguagesShown] = useState(false);

  return (
    <div
      className="relative items-center hidden cursor-pointer md:flex"
      onMouseEnter={() => setLanguagesShown(true)}
      onMouseLeave={() => setLanguagesShown(false)}
      aria-haspopup="true"
      aria-expanded={languagesShown}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          setLanguagesShown((isShown) => !isShown);
        }
      }}
    >
      <span className="uppercase text-sm text-[#afafaf]">
        Site language: English
      </span>
      <RiArrowDropDownLine className="text-[#afafaf] text-3xl" />
      {languagesShown && (
        <ul className="absolute right-0 top-full grid w-[500px] grid-cols-2 rounded-2xl border-2 border-gray-200 bg-white p-6 font-light text-gray-600">
          {languages.map((language) => (
            <li key={language.code}>
              <Link
                to={`https://${language.code}.duolingo.com/`}
                tabIndex={0}
                className="flex items-center gap-3 p-3 whitespace-nowrap rounded-xl hover:bg-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flag language={language} width={24} />
                {language.nativeName}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
