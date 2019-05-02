import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import {openNav} from '../../stores/nav'
export default class Header extends React.Component{
    
    render(){
        return(<div className="header">
            <img src="/hamburger-blue.png" alt="Menu" onClick={openNav} />
            <Link to="/"><img src="/zolo-header.png" className="logo" alt="Logo" /></Link>
        </div>)
    }
}