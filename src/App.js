import React from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

//Routes
import Register from './routes/Register'
import Login from './routes/Login';
import NotFound from './routes/NotFound'
import AddHostel from './routes/AddHostel'
import ListHostels from './routes/ListHostels'
import ViewHostel from './routes/ViewHostel'
import Home from './routes/Home';

function App() {
  return (
   <Router>
     <Switch>
       <Route path="/register" component={Register} exact/>
       <Route path="/login" component={Login} exact/>
       <Route path="/add-hostel" component={AddHostel} exact/>
       <Route path="/list-hostels" component={ListHostels} exact/>
       <Route path="/view-hostel/:hostel_id" component={ViewHostel} exact/>
       <Route path="/" component={Home} exact/>
       <Route default component={NotFound}/>
     </Switch>
   </Router>
  );
}

export default App;
