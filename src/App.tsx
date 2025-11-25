import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import './App.css';
import Homes from './pages/Homes';
import Experiences from './pages/Experiences';
import Services from './pages/Services';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className='text-3xl font-bold underline'>
          Hello world! This is AirBNB site.
        </h1>
        {/* Navigation */}

        <Header />

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
