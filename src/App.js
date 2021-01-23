import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Table, Row, Col} from 'react-bootstrap';
import TableComp from './components/TableComp';
import employee from './data.json';
import Tabela from './tabela';
import TableCompp from './components/TableCompp';
import FilteringTable from './components/FilteringTable';
import PadTable from './components/PadTable';
import NewTable from './components/NewTable';



function App() {
  return (
   <NewTable></NewTable>
  );
}

export default App;
