import React, { useEffect, useState } from "react";
import dataJson from './dataTable.json';
import { Table } from 'semantic-ui-react'; //semantic ui for table layout
import './App.css'

function App() {

  const [data, setData] = useState([]);  //initialise state vairable as empty array
  useEffect(() => { // to hook to dataJson flie
    setData(dataJson); 
  }, []);

  return (
    <div> 

      <Table celled>  
        <Table.Header>
          <Table.Row>
            {data.length > 0 &&
              Object.keys(data[0]).map((key) => ( // function  checks if there is data in json file or not .
                <Table.HeaderCell key={key}>{key}</Table.HeaderCell>
              ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => (
            <Table.Row key={index}>
              {Object.values(item).map((value, subIndex) => (
                <Table.Cell key={subIndex}>{value}</Table.Cell>  // renders the value from json file
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default App;
