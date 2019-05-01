import React from 'react';
import {getAll} from '../../services/hostels'
import {Link} from 'react-router-dom';

export default class ListHostels extends React.Component{
    constructor(props){
        super(props);
        this.loadData=this.loadData.bind(this);
        this.state={
            hostels:[]
        }
       
    }
    componentDidMount(){
        this.loadData();
    }
    async loadData(){
        let hostels = await getAll();
        this.setState({hostels})
    }
    render(){
        return(<div>
           <ul>
               {this.state.hostels.map((hostel,index)=><li key={index}><Link to={`/view-hostel/${hostel._id}`}>{hostel.name}</Link></li>)}
           </ul>
        </div>)
    }
}