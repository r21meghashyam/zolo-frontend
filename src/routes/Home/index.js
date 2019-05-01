import React from 'react';
import {Link} from 'react-router-dom';

export default class ViewHostel extends React.Component{
    
    render(){
        return(<div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/add-hostel">Add Hostel</Link></li>
                <li><Link to="/list-hostels">List Hostels</Link></li>
            </ul>
        </div>)
    }
}