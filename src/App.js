import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

//Routes
import Register from './routes/Register'
import Login from './routes/Login';
import NotFound from './routes/NotFound'
import AddHostel from './routes/AddHostel'

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/register" component={Register} exact/>
       <Route path="/login" component={Login} exact/>
       <Route path="/add-hostel" component={AddHostel} exact/>
       <Route default component={NotFound}/>
     </Switch>
   </Router>
  );
}

export default App;
