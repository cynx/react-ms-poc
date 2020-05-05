import React from 'react';
import './App.css';
import Header from './components/navbar/navbar';
import DynamicTable from './components/dynamic-table/DynamicTable';
import TableComponent from './components/table/TableComponent';
import withUserData from './hoc/withUserData';

const App: React.FC = () => { 
    const TableWithUserData = withUserData(TableComponent);

    return (
    <div className="App">
      <Header appName="Learn React" />
      <TableWithUserData></TableWithUserData>
    </div>
    );
}

export default App;
