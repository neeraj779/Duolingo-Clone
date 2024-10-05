import { useState } from "react";
import { useNavigate } from "react-router-dom";
import noteSVG from "../assets/svg/note.svg";
import useFetchQuestions from "../hooks/useFetchQuestions";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage";

const Welcome = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const { data: questions, error, isLoading } = useFetchQuestions();

  const handleContinue = () => {
    if (step < 6) {
      setStep(step + 1);
      setSelectedAnswer(null);
    } else {
      navigate("/learn");
    }
  };

  if (isLoading) return <Loader />;
  if (error) return <ErrorMessage />;

  const renderQuestion = () => {
    const question = questions[step - 1];
    return (
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center mb-4">
          <img src={noteSVG} alt="Note Icon" className="w-32 h-32 mr-2" />
          <h2 className="text-xl font-bold text-white">{question.text}</h2>
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => setSelectedAnswer(option.text)}
              className={`w-full min-w-[360px] h-[72px] rounded-2xl border-2 border-b-4 border-[#e5e5e5] px-6 py-3 font-bold uppercase transition text-center ${
                selectedAnswer === option.text
                  ? "bg-[#202f36] text-[#1cb0f6]"
                  : "text-white"
              }`}
            >
              <img
                src={option.image}
                alt={option.text}
                className="inline-block w-6 h-6 mr-2"
              />
              {option.text}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#131f24]">
      <div className="h-2 m-auto bg-gray-300 w-[80vw] mt-6">
        <div
          className="h-full bg-green-500"
          style={{ width: `${(step / 6) * 100}%` }}
        ></div>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow w-full p-4 mx-auto rounded-xl">
        {step === 1 ? (
          <>
            <h1 className="mb-4 text-3xl font-extrabold text-green-600">
              Hi there, I&apos;m Duo!
            </h1>
            <img src={noteSVG} alt="Note Icon" className="w-48 h-48" />
          </>
        ) : (
          renderQuestion()
        )}
      </div>

      <hr className="w-full my-2 border-t border-gray-300" />

      <div className="flex justify-end w-full mt-6 mb-6 -ml-12">
        <button
          onClick={handleContinue}
          className="px-9 py-2 text-xl text-black transition rounded-2xl bg-[#93d333] hover:bg-green-600 border border-b-4 border-[#79b933] font-bold uppercase"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Welcome;
