// External dependancies

import React from 'react';

// Feedback App imports

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <div className="page-content">
        <Header />
        <Routes />
      </div>
    </div>
  );
}

export default App;
