import './App.css';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import NotFoundPage from './NotFoundPage';
import { BrowserRouter as Router, NavLink, Route} from 'react-router-dom';

function App() {
  return (
    function App() {
  return (
    <Router>
      <div>
        <NavLink>
          <Route exact path="/"><component>HomePage</component></Route>
          <Route path="/about"><component>AboutPage</component></Route>
          <Route path="/contact"><component>ContactPage</component></Route>
          <Route><component>NotFoundPage</component></Route>
        </NavLink>
      </div>
    </Router>
  );
}

  );
}

export default App;
