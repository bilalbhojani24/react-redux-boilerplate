import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Public from './Component/Public';
import Private from './Component/Private';
import Data from './Component/Data';
import PrivateRoute from './Component/PrivateRoute';
import { Provider } from "react-redux";
import store from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello World</h1>
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/public">public</Link>
              </li>
              <li>
                <Link to="/data">Data</Link>
              </li>
              <li>
                <Link to="/private">private</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/public">
              <Public />
            </Route>
            <Route exact path="/data">
              <Data />
            </Route>
            <PrivateRoute component={Private} exact path="/private" />
          </Switch>
        </div>
      </Router>
      </div>
    </Provider>
    
  );
}

export default App;
