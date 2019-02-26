import React from 'react'
import  { Link } from 'react-router-dom'
import {connect} from "react-redux";

class Dashboard extends  React.Component{
    state = {};
    render() {
        return(
            <div>
                <h1> Dashboard</h1>
                <Link to="/detail"> Detail Page </Link>
                /
                <Link to="/detail"> State Page </Link>
                <br/>
                <h3>likes from redux : {this.props.likes}</h3>
            </div>
        );
    }
}
const mapStateProps = (state) => ({
    likes : state.character.likes
});

export  default connect(mapStateProps,{}) (Dashboard);