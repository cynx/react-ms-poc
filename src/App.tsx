import React from 'react';
import './App.css';
import Header from './components/navbar/navbar';
import DynamicTable from './components/dynamic-table/DynamicTable';

const App: React.FC = () => { 
    return (
    <div className="App">
      <Header appName="Learn React" />
      <DynamicTable></DynamicTable>
    </div>
    );
}

export default App;
