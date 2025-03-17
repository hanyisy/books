import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Footers from './com/Footers';
import Head from './com/Head';
import Home from './pages/Home';
import Suball from './pages/subAll';
import SubBest from './pages/subBest';
import SubNew from './pages/subNew';
import SubEvent from './pages/subEvent';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Head />
        <Routes>
          <Route path="" element={<Home />} /> 
          <Route path="Suball" element={<Suball />} />
          <Route path="SubBest" element={<SubBest />} />
          <Route path="SubNew" element={<SubNew />} />
          <Route path="SubEvent" element={<SubEvent />} />
        </Routes>
        <Footers />
      </div>
    </Router>
  );
}

export default App;
