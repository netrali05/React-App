import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import TableComponent from './components/Table';
import { BrowserRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/table" component={TableComponent} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};



export default App;
