import logo from './logo.svg';
import './App.css';
import GoogleSearch from './GoogleSearch';
import Dashboard from './Dashboard';
import { useState } from 'react';

function App() {

  const [receivedData, setReceivedData] = useState('');

  const handleDataFromDashboard = data => {
    setReceivedData(data);
  }

  const websites = [
    { name: 'Google', url: 'https://www.google.com' },
    { name: 'Facebook', url: 'https://www.facebook.com' },
    { name: 'Amazon', url: 'https://www.amazon.com' },
    { name: 'Netflix', url: 'https://www.netflix.com' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <a target='_blank' href={receivedData.url}>{receivedData.name}</a>
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://www.gurufocus.com/shiller-PE.php"><img src="https://chart.gurufocus.com/1737833878850170880.svg" /></a>
        {/* <GoogleSearch /> */}
      </header>
      <Dashboard data={websites} onDataButtonClick={handleDataFromDashboard}/>
    </div>
  );
}

export default App;
