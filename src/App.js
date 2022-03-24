
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/home';
import Login from './Pages/login';
import Dashboard from './Pages/dashboard';
import Addrole from './Pages/addrole';
import ApplicantDetails from './Pages/applicantDetails';
import ApplicantForm from './Pages/applicantForm';

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
          <Route exact path='/applicant/:id'>
            <ApplicantDetails/>
          </Route>
          <Route exact path='/apply/:id'>
            <ApplicantForm/>
          </Route>
          <Route exact path='/addrole'>
            <Addrole/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
