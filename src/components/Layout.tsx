import { useState } from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import useWeather from "../hooks/useWeather";

const Layout = () => {
  const [searchCity, setSearchCity] = useState<string>("");
  const { data } = useWeather(searchCity);

  console.log(data);

  const handleSubmit = (city: string) => {
    setSearchCity(city);
  };

  return (
    <div className="bg-[#109090] flex flex-col mt-40 w-full max-w-[540px] h-fit p-10 rounded-lg">
      <Header handleSubmit={handleSubmit} />
      <Body weather={data} />
      <Footer weather={data} />
    </div>
  );
};

export default Layout;
