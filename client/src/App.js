import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WeekAverages from './components/Graphs/WeekAverages/WeekAverages';
import LongTermDevelopment from './components/Graphs/LongTermDevelopment/LongTermDevelopment';

function App() {
  return (
    <div className="page-wrapper">
      <BrowserRouter>
        <Sidebar />
        <div className="page-content">
          <Header />
          <main className="teams-average-charts">
            <div className="teams-average-charts-body">
              <WeekAverages />
              <LongTermDevelopment />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
