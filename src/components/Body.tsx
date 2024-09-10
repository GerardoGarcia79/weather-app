import weather from "../assets/react.svg";

const Body = () => {
  return (
    <div className="flex justify-center m-10">
      <div className="flex flex-col">
        <img
          src={weather}
          alt="Weather condition"
          width="200px"
          height="200px"
          className="mb-3"
        />
        <div className="text-center text-white font-bold">
          <h1 className="text-6xl mb-1">21°c</h1>
          <h2 className="text-5xl">New York</h2>
        </div>
      </div>
    </div>
  );
};

export default Body;
