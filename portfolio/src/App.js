import React, { useEffect } from 'react';
import { GridComponent } from './containers/gridComponent/index.jsx';
import { TopSection } from './pages/homePage/topSection.jsx';

function App() {
  useEffect(() => {
    document.title = 'Portfolio';
  },[]);


  return <TopSection />;
}

export default App;
