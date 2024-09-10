import { Weather } from "../App";
import weatherI from "../assets/react.svg";

interface Props {
  weather: Weather;
}

const Body = ({ weather }: Props) => {
  return (
    <div className="flex justify-center m-10">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <img
            src={weatherI}
            alt="Weather condition"
            width="200px"
            height="200px"
            className="mb-3"
          />
        </div>
        <div className="text-center text-white font-bold">
          <h1 className="text-6xl mb-1">{weather.main.temp}°c</h1>
          <h2 className="text-5xl">{weather.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Body;
