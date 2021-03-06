import React from "react";
import "./Table.css";
import numeral from "numeral";

// numeral function is used to format numerical data(adding commas in between)
function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(country => (
        <tr>
          <td>{country.country}</td>
          <td>
            <strong>{numeral(country.cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
