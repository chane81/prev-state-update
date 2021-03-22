import { BrowserRouter as Router, Route } from 'react-router-dom';
import BadStateUpdate from './components/BadStateUpdate';
import BestStateUpdate from './components/BestStateUpdate';

export default function App() {
  return (
    <Router>
      <Route exact={true} path={'/'} component={BadStateUpdate} />
      <Route path={'/BadStateUpdate'} component={BadStateUpdate} />
      <Route path={'/BestStateUpdate'} component={BestStateUpdate} />
    </Router>
  );
}
