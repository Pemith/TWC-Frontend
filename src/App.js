
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/home';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';

function App() {
  return (

    <Router>
      <ToastContainer/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path='/login'>
            <Login/>
          </Route>
          <Route exact path='/dashboard/:id'>
            <Dashboard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
