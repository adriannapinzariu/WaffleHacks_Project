import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import LoginPage from './LoginPage';

function MainRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default MainRouter;
