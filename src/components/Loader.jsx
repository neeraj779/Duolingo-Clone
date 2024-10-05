const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#131f24]">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 delay-200 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Spinner;
