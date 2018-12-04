import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import "./styles.css";

const MyComponent = props => {
  return (
    <div>
      {` hello ${props.name} ${props.lastname}`}
      {props.children()}
    </div>
  );
};

const withLastName = Component => props => {
  return (
    <Component {...props} lastname={"Martinez"}>
      {() => <div>{"I don not really get this"}</div>}
    </Component>
  );
};

const StyledRow = styled.tr`
  border: 5px solid red;
`;
const Row = ({ row, children }) => {
  return <tr>{row.map((cell, index) => children({ cell, index }))}</tr>;
};

const Rows = props => {
  return props.rows.map((row, index) => props.children({ row, index }));
};

const Cell = ({ cell }) => {
  const StyledCell = styled.td`
    background-color: gray;
    color: white;
  `;
  return <StyledCell>{cell}</StyledCell>;
};

const Header = ({ cols }) => {
  return cols.map((name, index) => <th key={index}>{name}</th>);
};

const Table = ({ rows, cols }) => {
  return (
    <table>
      {
        <tbody>
          {
            <tr>
              <Header cols={cols} />
            </tr>
          }
          {
            <Rows rows={rows}>
              {({ row, index }) => (
                <Row key={index} row={row}>
                  {({ cell, index }) => <Cell key={index} cell={cell} />}
                </Row>
              )}
            </Rows>
          }
        </tbody>
      }
    </table>
  );
};

const FullName = withLastName(MyComponent);

function App() {
  //dinamyc composistion with render props
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <FullName name={"Gabriel"} />
      <Table
        rows={[["gabrile", "martinez"], ["ernestom", "escoabr"]]}
        cols={["first column", "second column"]}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
