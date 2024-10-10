import { useQuery } from "@tanstack/react-query";
import { Question } from "../common/types/welcome.types";

const fetchQuestions = async (): Promise<Question[]> => {
  const response = await fetch("http://localhost:3001/questions");
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
