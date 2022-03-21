
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/home';

function App() {
  return (

    <Router>
      <ToastContainer/>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
