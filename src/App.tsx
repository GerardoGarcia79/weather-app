import "./App.css";
import Layout from "./components/Layout";
import useWeather from "./hooks/useWeather";

export interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

function App() {
  const { error, isLoading } = useWeather();

  if (error) return <p className="text-red-600 text-2xl">{error}.</p>;

  return (
    <div className="bg-[#f6c0ad] h-screen flex justify-center">
      {isLoading ? (
        <p className="text-red-600 text-2xl">Loading...</p>
      ) : (
        <Layout />
      )}
    </div>
  );
}

export default App;
