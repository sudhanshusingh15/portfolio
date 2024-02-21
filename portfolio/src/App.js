import React, { useEffect } from 'react';
import { TopSection } from './pages/homePage/topSection.jsx';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  },[]);

  return (
    <div className="App">
      <TopSection />
    </div>
  );
}

export default App;
