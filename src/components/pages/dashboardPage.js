import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from "react-redux";
import {Dimmer, Loader} from "semantic-ui-react";
import {increaseLikes, ceroLikes, decreaseLikes, fetchCharacterSaga} from '../../actions/character'
import List from '../common/list'

class Dashboard extends React.Component {
    state = {};

    componentDidMount() {
        this.props.fetchCharacterSaga();
    }

    render() {
        const {character} = this.props;
        if (character.fetching) {
            return (<Dimmer active><Loader>Loading</Loader></Dimmer>)
        }
        return (
            <div>
                <br/>
                <Link to="/detail"> Detail Page </Link>
                <br/>
                <h1>Character List</h1>
                {character.characters.length ? (<List characters={character.characters}/>) : (<h3>Empty List</h3>)}
                <br/>
                <Link to="/state"> State Page </Link>
            </div>
        );
    }
}

const mapStateProps = (state) => ({
    likes: state.character.likes,
    character: state.character
});

export default connect(mapStateProps, {increaseLikes, ceroLikes, decreaseLikes, fetchCharacterSaga})(Dashboard);