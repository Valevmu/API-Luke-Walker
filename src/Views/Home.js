import React, { useEffect, useState } from "react";

import { getAllResources } from "../services/getswapi-service";

const Home = () => {
  const [resources, setResources] = useState([]);
  const handleButton = () =>{
    getSwapi();
  }
  const getSwapi = async () => {
    try {
      const swapiData = await getAllResources();
      console.log("copydata", swapiData);
      setResources(Object.keys(swapiData.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSwapi();
  }, []);

  return (
    <div>
      <form action="" id="form">
        <label>Search for: </label>
        <select className="dropbtn" name="" id="">
          {resources.length > 0 &&
            resources.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
        </select>

        <div>
          <input
            className="inputApi"
            type="number"
            placeholder="type a number"
          ></input>
        </div>
        <div>
        <button onClick={handleButton} className="btn">Search</button>

        </div>
      </form>
    </div>
  );
};

export default Home;
