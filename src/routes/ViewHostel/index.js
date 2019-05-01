import React from 'react';
import {get} from '../../services/hostels'

export default class ViewHostel extends React.Component{
    constructor(props){
        super(props);
        this.loadData=this.loadData.bind(this);
        this.state={}
       
    }
    componentDidMount(){
        this.loadData(); 
    }
    async loadData(){
        let hostel = await get(this.props.match.params.hostel_id);
        this.setState(hostel)
    }
    render(){
        return(<div>
           Name: {this.state.name}<br/>
           City: {this.state.city}<br/>
           Locality: {this.state.locality}<br/>
           Description: {this.state.description}<br/>
           Location: {this.state.location}<br/>
           Landmarks: {this.state.landmarks}<br/>
        </div>)
    }
}