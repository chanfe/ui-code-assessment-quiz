import * as React from "react";
import Start from './components/Start'


export const App = () => (
    <div>
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Lucid</h1>
            <h2>Welcome to UI Team code assessment!</h2>
        </div>
        <Start />
    </div>
  );
    
