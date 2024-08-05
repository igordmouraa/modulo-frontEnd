import React from "react";

const SalesTable = ({ salesData }) => {
  return (
    <table>
      <thead>
        <tr>
            <th>Mês</th>
            <th>Valor de Vendas</th>
            <th>Número de Vendas</th>
        </tr>
      </thead>
      <tbody>
        {salesData.map((data, index) => (
            <tr key={index}>
                <td>{data.month}</td>
                <td>{data.salesValue}</td>
                <td>{data.numberOfSales}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SalesTable;
