import React from 'react';
import './style.css';
import {Link} from 'react-router-dom'
import {store,closeNav} from '../../stores/nav'
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            classes:'sidebar'
        }
    }
    componentDidMount(){
        console.log(store.getState());
        store.subscribe(()=>{
            let state = store.getState();
            if(state.type==='open')
                this.setState({classes:'sidebar open'})
            else
                this.setState({classes:'sidebar'})
        })
    }
    render(){
        return(
        <div className={this.state.classes}>
            <div className='background' onClick={closeNav}></div>
            <div className="panel">
            <img src="close-hamburger.svg" onClick={closeNav} class="closeBtn" alt="close" />
            <div class="division" onClick={closeNav}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/list-hostels">Hostels</Link></li>
                        <li><Link to="/register">Register</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/add-hostel">Add Hostel</Link></li>
                    </ul>
                    <ul>
                        <li>Contact Us</li>
                        <div className="contact">
                            8123928667
                        </div>
                        <div className="contact">
                            r21meghashyam@gmail.com
                        </div>
                    </ul>
                </div>
                <div className=" bottom">

                    <div><img src="/logo.png" alt="logo"/></div>
                    <div>&copy; {(new Date().getFullYear())}, Zolostays, All rights reserved</div>
                </div>
        </div>
        
        </div>)
    }
}