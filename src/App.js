import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footers from './com/Footers';
import Head from './com/Head';
import Home from './pages/Home';
import Suball from './pages/subAll';
import Bot from './pages/Bot';
import Sho from './pages/Sho';
import Ve from './pages/Ve';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Suball" element={<Suball />} />
          <Route path="/Bot" element={<Bot />} />
          <Route path="/Sho" element={<Sho />} />
          <Route path="/Ve" element={<Ve />} />
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
