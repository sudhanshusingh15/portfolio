import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/homePage/index';
import { TopSection } from './pages/homePage/topSection';
import { About } from './pages/about';
import { Dukaan } from './pages/work/dukaan';
import { Pathology } from './pages/work/pathology';

function App() {
  useEffect(() => {
    document.title = "Sudhanhu Singh • Software Dev"; // Set your desired title here
  }, []);

//   return (
//     <Router>
//       <div className="App">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/user/access/:action" element={<HomePage />} />
//           <Route path="/upload" element={<HomePage />} />
//           <Route path="/about" element={<HomePage />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// return (
//   <Router>
//     <div className="App">
//       <Routes>
//         <Route path="/" element={<TopSection />} />
//         <Route path="/user/access/:action" element={<TopSection />} />
//         <Route path="/upload" element={<TopSection />} />
//         <Route path="/about" element={<TopSection />} />
//       </Routes>
//     </div>
//   </Router>
// );
// }

// return (
//   <Router>
//     <div className="App">
//         <About path="/about" />
//     </div>
//   </Router>
// );

return (
  <Router>
    <div className="App">
        <Pathology path="/pathology" />
    </div>
  </Router>
);
}

export default App;