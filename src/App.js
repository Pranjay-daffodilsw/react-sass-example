import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          React app practicing sass
        </p>
        <div className="variable1">
          variable1
        </div>
        <div className="variable2">
          variable2
        </div>
        <div className="variable3">
          variable3
        </div>
        <hr />
        <div className="nest1">
          <div className="nest2">
            nest
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
