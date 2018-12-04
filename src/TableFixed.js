import React from "react";

const Column = ({ countcolumns, countrows, columns, cell, header }) => {
  return (
    <React.Fragment>
      <tr>
        {header.map((h, index) => {
          return <th>{h}</th>;
        })}
      </tr>
      <tr>
        {Array.from({ length: countcolumns }, (v, i) => i).map(index => {
          console.log(index);
          console.log(cell({ index }));
          return cell({ index }).map(c => <td>{c}</td>);
        })}
      </tr>
    </React.Fragment>
  );
};

class Table extends React.Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    const rows = [
      ["gabriel", "martinez", "insurgente"],
      ["ernesto", "escobar", "santa maria"]
    ];
    return (
      <div>
        <table>
          <tbody>
            <Column
              header={["name", "lastname", "address"]}
              cell={({ index }) => {
                return rows.map(row => row[index]);
              }}
              countrows={rows.length}
              countcolumns={rows[0].length}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
