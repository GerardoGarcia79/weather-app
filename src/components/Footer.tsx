import { TbWind } from "react-icons/tb";
import { MdOutlineWaves } from "react-icons/md";
import { Weather } from "../App";

interface Props {
  weather: Weather;
}

const Footer = ({ weather }: Props) => {
  return (
    <div className="flex justify-between text-white">
      <div className="flex">
        <MdOutlineWaves size="60px" />
        <div className="font-bold ml-2">
          <h3 className="text-3xl">{weather.main.temp} %</h3>
          <p className="text-xl">Humidity</p>
        </div>
      </div>
      <div className="flex">
        <TbWind size="60px" />
        <div className="font-bold ml-2">
          <h3 className="text-3xl">{weather.wind.speed} Km/h</h3>
          <p className="text-xl">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
