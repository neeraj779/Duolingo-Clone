import { useQuery } from "@tanstack/react-query";
import { Question } from "../common/types/welcome.types";

const fetchQuestions = async (): Promise<Question[]> => {
  const response = await fetch(
    "https://my-json-server.typicode.com/neeraj779/Duolingo-Clone-Backend/questions"
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useFetchQuestions = () => {
  return useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });
};

export default useFetchQuestions;
