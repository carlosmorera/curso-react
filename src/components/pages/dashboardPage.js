import React from 'react'
import  { Link } from 'react-router-dom'
import {connect} from "react-redux";
import { increaseLikes, ceroLikes, decreaseLikes} from '../../actions/character'

class Dashboard extends  React.Component{
    state = {};
    render() {
        return(
            <div>
                <h1> Dashboard Likes  {this.props.likes}</h1>
                <button onClick={this.props.increaseLikes}>Like + 1</button>
                <button onClick={this.props.decreaseLikes}>Like - 1</button>
                <button onClick={this.props.ceroLikes}>Like 0</button>
                <br/>
                <Link to="/detail"> Detail Page </Link>
                <br/>
                <Link to="/state"> State Page </Link>
            </div>
        );
    }
}
const mapStateProps = (state) => ({
    likes : state.character.likes
});

export  default connect(mapStateProps,{increaseLikes, ceroLikes, decreaseLikes}) (Dashboard);