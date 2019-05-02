import React from 'react';
import {create} from '../../services/hostels';
import maps from '@google/maps'
import constants from '../../utils/constants';

const googleMapsClient = maps.createClient({
    key: constants.google.maps.apiKey
  });

export default class AddHotel extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }
    async handleSubmit(event){
        event.preventDefault();
        if(!this.state.name)
            return alert("No Name");
        if(!this.state.city)
            return alert("No City");
        if(!this.state.locality)
            return alert("No locality");
        if(!this.state.description)
            return alert("No description");
        if(!this.state.location)
            return alert("No location");
        if(!this.state.landmarks)
            return alert("No landmarks");
        
        let response = await create(this.state);
        alert(response);
    }
    render(){
        return(<div>
            <form onSubmit={this.handleSubmit}>
                Name: <input type="text" onChange={this.handleChange} name="name"/><br/>
                City: <input type="text" onChange={this.handleChange} name="city"/><br/>
                Locality: <input type="text" onChange={this.handleChange} name="locality"/><br/>
                Description: <input type="text" onChange={this.handleChange} name="description"/><br/>
                Location: <input type="text" onChange={this.handleChange} name="location"/><br/>
                Landmarks: <input type="text" onChange={this.handleChange} name="landmarks"/><br/>
                <button>Login</button>
            </form>
        </div>)
    }
}