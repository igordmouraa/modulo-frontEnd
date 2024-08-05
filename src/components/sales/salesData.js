import React from "react";
import { salesData } from "../../data/script1";
import SalesTable from "./salesTables";

const SalesData = () => {
  return (
    <div>
      <h1>Dados de venda:</h1>
      <SalesTable salesData={salesData}/>

    </div>
  );
};

export default SalesData;
