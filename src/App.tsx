import React from 'react';
import './App.css';

// import ColorGrid from './components/ColorGrid';

import Home from './components/Home';
import Stars from './components/Stars';

  const appStyles = {
    backgroundColor: '#111111',
    minHeight: '100vh',
    padding: '20px',
  };


// function App() {
//   return (
//     <div className="App" style={appStyles}>
//       {/* <ColorGrid /> */}
//       {<Home />}
//     </div>
//   );
// }


const App: React.FC = () => {
  return (
    <div className="App" style={appStyles}>
      <Home />
      <Stars sars={1000} />
    </div>
  );
};


export default App;
