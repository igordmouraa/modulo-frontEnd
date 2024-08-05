import React from "react";

const DaysTable = ({ dias }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Dia</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        {dias.map((data, index) => (
          <tr key={index}>
            <td>{data.Dia}</td>
            <td>{data.valor}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DaysTable;
