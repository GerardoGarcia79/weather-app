import axios, { AxiosError, CanceledError } from "axios";
import "./App.css";
import Layout from "./components/Layout";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=guadalajara&appid=b5f0bef35c4896eae93d796b05d8ea2c&units=metric`,
        {
          signal: controller.signal,
        }
      )
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((error: AxiosError) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => controller.abort();
  }, []);
  if (error) return <p className="text-red-600 text-2xl">{error}.</p>;

  console.log(data);

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
