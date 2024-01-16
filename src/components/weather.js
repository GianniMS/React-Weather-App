import React from "react";
import Card from "./card";
import Title from "./title";
import "./style/weather.css";

class Weather extends React.Component {

    render() {
        return (
            <div className="screen">
                <Title/>
                <Card/>
            </div>
        );
    }
}

export default Weather;