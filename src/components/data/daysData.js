import React, { useState } from "react";
import DaysTable from "./daysTables";
import { dias } from "../../data/script2";

const DaysData = () => {
  const [dayType, setDayType] = useState("tercas");

  return (
    <div>
      <h1>Dados dos dias:</h1>
      <select onChange={(e) => setDayType(e.target.value)}>
        <option value='tercas'>Terças</option>
        <option value='quintas'>Quintas</option>

      </select>

      <DaysTable dias={dias[dayType]} />
    </div>
  );
};

export default DaysData;
