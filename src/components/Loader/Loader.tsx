import "./loader.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#131f24]">
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Spinner;
