import React from "react";
import Card from "./card";
import "./style/weather.css";

class Weather extends React.Component {

    render() {
        return (
            <div className="screen">
                <Card/>
            </div>
        );
    }
}

export default Weather;