import { TbWind } from "react-icons/tb";
import { MdOutlineWaves } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex justify-between text-white">
      <div className="flex">
        <MdOutlineWaves size="60px" />
        <div className="font-bold ml-2">
          <h3 className="text-3xl">67 %</h3>
          <p className="text-xl">Humidity</p>
        </div>
      </div>
      <div className="flex">
        <TbWind size="60px" />
        <div className="font-bold ml-2">
          <h3 className="text-3xl">2.06 Km/h</h3>
          <p className="text-xl">Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
