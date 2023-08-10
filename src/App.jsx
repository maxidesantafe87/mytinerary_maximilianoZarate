import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cities from './pages/Cities';
import './app.css';

function App() {
  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center gap-6 bg-cover h-[100vh] font-preahvihear font-bold" >
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
