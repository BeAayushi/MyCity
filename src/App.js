import React, { useState, useEffect } from "react";
import YourCity from "./components/YourCity";
import "./App.css";

function App() {
  const [city, setCity] = useState("");

  useEffect(() => {
    fetch("https://freegeoip.app/json")
      .then((response) => response.json())
      .then((response) =>
        setCity(response.city + ", " + response.country_name)
      );
  }, []);
  return (
    <div>
      <YourCity address={city}></YourCity>
    </div>
  );
}

export default App;
