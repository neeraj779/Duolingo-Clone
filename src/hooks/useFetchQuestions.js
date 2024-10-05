import { useQuery } from "@tanstack/react-query";

const fetchQuestions = async () => {
  const response = await fetch("http://localhost:3001/questions");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const useFetchQuestions = () => {
  return useQuery({
    queryKey: ["questions"],
    queryFn: fetchQuestions,
  });
};

export default useFetchQuestions;
