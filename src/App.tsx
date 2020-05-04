import React from 'react';
import './App.css';
import Header from './components/navbar/navbar';

const App: React.FC = () => { 
    return (
    <div className="App">
      <Header appName="Learn React" />
    </div>
    );
}

export default App;
