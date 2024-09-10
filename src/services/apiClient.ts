import axios from "axios";

export default axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
  params: {
    appid: "b5f0bef35c4896eae93d796b05d8ea2c",
  },
});
