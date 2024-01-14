import React from "react";
import "./style/title.css";

class Title extends React.Component {

    render() {
        return (
            <div className="cardTitle">Weather App<span className="titleEnd">.</span></div>
        );
    }
}

export default Title;