import apiClient from "../services/apiClient";
import { Weather } from "../App";
import { useEffect, useState } from "react";
import { AxiosError, CanceledError } from "axios";

const useData = () => {
  const [data, setData] = useState<Weather>({
    name: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const controller = new AbortController();
    apiClient
      .get<Weather>(``, {
        signal: controller.signal,
        params: {
          q: "guadalajara",
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
  }, []);
  return { data, error, isLoading };
};

export default useData;
