import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import HelloWorld from './components/HelloWorld';
import HomePage from './components/HomePage';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/greetings" element={<HelloWorld />} />
    </Routes>
  </Router>
);

export default App;
