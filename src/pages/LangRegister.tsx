import { Link } from "react-router-dom";
import languages from "../utils/languages";
import NavBar from "../components/NavBar";
import { Flag } from "../components/Flag";

const LangRegister = () => {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <NavBar />
      <div className="container flex flex-col items-center justify-center gap-20 px-4 py-16 grow">
        <h1 className="mt-20 text-3xl font-extrabold tracking-tight text-center text-[#4b4b4b]">
          I want to learn...
        </h1>
        <section className="grid flex-col w-full max-w-5xl grid-cols-1 mx-auto grow gap-x-2 gap-y-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {languages.map((language) => (
            <Link
              key={language.name}
              to="/welcome"
              className={
                "flex cursor-pointer flex-col items-center gap-4 rounded-2xl border-2 border-b-4 border-gray-300 px-5 py-8 text-xl font-bold hover:bg-gray-300 hover:bg-opacity-20"
              }
            >
              <Flag language={language} />
              <span>{language.name}</span>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
};

export default LangRegister;
