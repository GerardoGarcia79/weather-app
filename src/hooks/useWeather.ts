import apiClient from "../services/apiClient";
import { Weather } from "../App";
import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";

const useWeather = (city?: string) => {
  const [data, setData] = useState<Weather>({
    name: "",
    main: {
      temp: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    weather: [
      {
        description: "",
        main: "",
        id: 0,
      },
    ],
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const cityName = city ? city : "guadalajara";

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Weather>(``, {
        signal: controller.signal,
        params: {
          q: cityName,
          units: "metric",
        },
      })
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
  }, [cityName]);
  return { data, error, isLoading };
};

export default useWeather;
