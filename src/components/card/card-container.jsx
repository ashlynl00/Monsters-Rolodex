import { Component } from "react";
import './card-container.style.css';

class CardContainer extends Component {

    render () {
        const {id, email, name} = this.props.monster;

        return (
            <div className="card-container" key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`}></img>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
    }
}

export default CardContainer;