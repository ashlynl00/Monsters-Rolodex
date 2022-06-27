import { Component } from "react";
import './card-list.styles.css';
import CardContainer from "../card/card-container";

class CardList extends Component {

    render () {
        const {monsters} = this.props;
        return (
            <div className="card-list">
                {monsters.map(monster => {
                    return (
                        <CardContainer monster={monster}></CardContainer>
                    )
                })}
            </div>
        )
    }
}

export default CardList;