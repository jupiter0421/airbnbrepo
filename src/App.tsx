import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Homes from './pages/Homes';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
import Footer from './pages/Footer';
import Navbar1 from './components/Navbar1';
// import Header from './pages/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        {/* Navigation */}
        <Navbar />
        {/* <Navbar1 /> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
