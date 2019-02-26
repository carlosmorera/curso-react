import React from 'react'
import {Button, Segment} from "semantic-ui-react";
import { increaseLikes, ceroLikes, decreaseLikes } from '../../actions/character'
import {connect} from "react-redux";

class StateLocal extends React.Component {
    state = {};
    render() {
        return (
            <Segment>
                <h1> Local state </h1>
                <Button
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{basic: true, color: ' red', pointing: ' left', content: this.props.likes}}
                        onClick={this.props.increaseLikes}
                /> <Button
                        color='green'
                        content='Dislike'
                        icon='heart'
                        label={{basic: true, color: ' red', pointing: ' left', content: this.props.likes}}
                        onClick={this.props.decreaseLikes}
                /> <Button
                        color='blue'
                        content='Reset Likes'
                        icon='heart'
                        label={{basic: true, color: ' red', pointing: ' left', content: this.props.likes}}
                        onClick={this.props.ceroLikes}
                />
            </Segment>
        );

    }
}
const mapStateProps = (state) => ({
    likes : state.character.likes
});

export default connect(mapStateProps,{increaseLikes,decreaseLikes, ceroLikes}) (StateLocal);