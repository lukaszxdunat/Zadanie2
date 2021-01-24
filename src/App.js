import React, { useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewTable from './components/NewTable';

function App() {
  useEffect(() => {
    document.title = "Helion - Zadanie Nr 2";
  }, [])

  return (
   <NewTable></NewTable>
  );
}

export default App;
