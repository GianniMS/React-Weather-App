import React from "react";
import Title from "./title";
import "./style/card.css";

class Card extends React.Component {

    render() {
        return (
            <div className="cardMain">
                <Title/>
            </div>
        );
    }
}

export default Card;