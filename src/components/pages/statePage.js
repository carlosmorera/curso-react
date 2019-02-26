import React from 'react'
import {Button, Segment} from "semantic-ui-react";

class StateLocal extends React.Component {
    state = {likes: 0};

    addLikke = () => {
        this.setState({
            likes: this.setState.likes + 1
        })
    };

    render() {
        const { likes } = this.setState;
        return (
            <Segment>
                <h1> Local state </h1>
                <Button onClick={this.addLikke}
                        color='red'
                        content='Like'
                        icon='heart'
                        label={{basic: true, color: ' red', pointing: ' left', content: likes}}
                />
            </Segment>
        );

    }
}

export default StateLocal;