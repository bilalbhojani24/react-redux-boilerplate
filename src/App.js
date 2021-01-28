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
        <h1>REACT-REDUX BOILERPLATE WITH THUNK MIDDLEWARE</h1>
        <Router>
        <div>
          <p><Link to="/public">public</Link></p>
          <p><Link to="/data">Data</Link></p>
          <p><Link to="/private">private</Link></p>
          <Switch>
            <Route exact path="/public"><Public /></Route>
            <PrivateRoute component={Data} exact path="/data" />
            <PrivateRoute component={Private} exact path="/private" />
          </Switch>
        </div>
      </Router>
      </div>
    </Provider>
  );
}
export default App;

