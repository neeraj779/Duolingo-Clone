import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import { LanguageCarousel } from "../components/LanguageCarousel";
import WelcomeSvg from "../assets/svg/welcome.svg";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-black">
      <NavBar />
      <div className="flex flex-col items-center justify-center w-full gap-2 px-4 py-16 mx-4 md:mx-12 lg:mx-24 md:flex-row">
        <img src={WelcomeSvg} className="h-fit w-11/12 md:w-[360px]" />
        <div>
          <p className="mb-6 max-w-[470px] text-center text-3xl font-extrabold md:mb-12 text-[#4b4b4b]">
            The free, fun, and effective way to learn a language!
          </p>
          <div className="flex flex-col items-center gap-3 mx-auto mt-4 w-fit">
            <Link
              to="/language"
              className="w-full rounded-2xl border-b-4 text-white border-[#59a700] bg-[#58cc05] px-10 py-3 text-center font-bold uppercase transition hover:border-green-600 hover:bg-green-500 md:min-w-[320px]"
            >
              Get started
            </Link>
            <Link
              to="/login"
              className="w-full rounded-2xl m-auto border-2 border-b-4 border-[#e5e5e5] text-[#1cb0f6] px-8 py-3 font-bold uppercase transition hover:bg-gray-100 md:min-w-[320px] text-center block"
            >
              I already have an account
            </Link>
          </div>
        </div>
      </div>
      <LanguageCarousel />
    </main>
  );
};

export default Home;
