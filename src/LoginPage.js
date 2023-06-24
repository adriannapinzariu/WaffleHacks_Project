import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StartPages from './StartPages';
import LoginPage from './LoginPage'; // import the LoginPage component
// ... other imports

function App() {
  // ... other code
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartPages />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        {/* Add more Routes for other pages */}
      </Switch>
    </Router>
  );
}

export default App;
