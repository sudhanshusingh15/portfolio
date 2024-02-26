import React, { useEffect } from 'react';
import { TopSection } from './pages/homePage/topSection.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// function App() {
//   useEffect(() => {
//     document.title = 'Portfolio';
//   },[]);

//   return (
//     <div className="App">
//       <TopSection />
//     </div>
//   );
// }

// export default App;

function App() {
  useEffect(() => {
    document.title = "Portfolio"; // Set your desired title here
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<TopSection />} />
          <Route path="/user/access/:action" element={<TopSection />} />
          <Route path="/upload" element={<TopSection />} />
          <Route path="/about" element={<TopSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;