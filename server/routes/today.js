const axios = require("axios");

const today = async (city, key) => {
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

  try {
    const response = await axios.get(url);
    res = response.data;
    const mainWeather = res.weather[0];
    return mainWeather;
  } catch (error) {
    // Handle any errors
    console.error("Error fetching data:", error);
    throw error;
  }
};

module.exports = today;
