import React, {Component} from 'react';
import CardList from "./CardList";
import Form from "./Form";

class GitHubCards extends Component {
    state = {
        cards: []
    };

    addNewCard = (cardInfo) => {
        this.setState((prevState) =>
            ({
                cards: prevState.cards.concat(cardInfo)
            })
        );
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.addNewCard}/>
                <CardList card={this.state.cards}/>
            </div>
        )
    }
}

export default GitHubCards;