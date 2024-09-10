import { Weather } from "../App";
import clear from "../assets/clear.png";
import clouds from "../assets/cloud.png";
import atmosphere from "../assets/atmosphere.png";
import snow from "../assets/snow.png";
import drizzle from "../assets/drizzle.png";
import thunderstorm from "../assets/thunderstorm.png";
import rain from "../assets/rain.png";

interface Props {
  weather: Weather;
}

const Body = ({ weather }: Props) => {
  console.log(weather.weather[0].main);

  const conditions: { [condition: string]: JSX.Element } = {
    Clear: <img src={clear} width="200px" height="200px" className="mb-3" />,
    Clouds: <img src={clouds} width="200px" height="200px" className="mb-3" />,
    Atmosphere: (
      <img src={atmosphere} width="200px" height="200px" className="mb-3" />
    ),
    Snow: <img src={snow} width="200px" height="200px" className="mb-3" />,
    Drizzle: (
      <img src={drizzle} width="200px" height="200px" className="mb-3" />
    ),
    Thunderstorm: (
      <img src={thunderstorm} width="200px" height="200px" className="mb-3" />
    ),
    Rain: <img src={rain} width="200px" height="200px" className="mb-3" />,
  };

  return (
    <div className="flex justify-center m-10">
      <div className="flex flex-col">
        <div className="flex justify-center">
          {conditions[weather.weather[0].main]}
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
