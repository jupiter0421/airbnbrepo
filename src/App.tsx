import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Homes from './pages/Homes';
import Experiences from './pages/Experiences';
import Services from './pages/Services';
// import Header from './pages/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='text-3xl font-bold underline'>
          Hello world! This is AirBNB site.
        </h1>

        {/* Navigation */}
        <Navbar />
        {/* <Header /> */}

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
