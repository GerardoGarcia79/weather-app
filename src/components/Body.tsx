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
        />
        <h1>21°c</h1>
        <h2>New York</h2>
      </div>
    </div>
  );
};

export default Body;
