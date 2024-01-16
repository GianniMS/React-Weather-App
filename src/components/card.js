import React from "react";
import "./style/card.css";
import search_icon from "../components/assets/search.png";
import wind_icon from "../components/assets/wind.png";
import humidity_icon from "../components/assets/humidity.png";
import clear_icon from "../components/assets/clear.png";
import cloud_icon from "../components/assets/cloud.png";
import drizzle_icon from "../components/assets/drizzle.png";
import rain_icon from "../components/assets/rain.png";
import snow_icon from "../components/assets/snow.png";

class Card extends React.Component {

    render() {
        return (
            <div className="card-main">
                <div className="search-bar">
                    <input type="text" className="locationInput" placeholder="Select your city"/>
                    <div className="si-container">
                        <img src={search_icon} alt="" className="search-icon"/>
                    </div>
                </div>
                <div className="weather-all">
                    <div className="weather-main">
                        <div className="main-icon">
                            <img src={cloud_icon} alt="" className="m-icon"/>
                        </div>
                        <div className="main-info">
                            20 Degrees
                        </div>
                        <div className="main-location">
                            Amsterdam
                        </div>
                    </div>
                    <div className="weather-details">
                        <div className="detail">
                            <div className="detail-icon">
                                <img src={wind_icon} alt="" className="d-icon"/>
                            </div>
                            <div className="detail-info">
                                10Km/h <br/> Wind Speed
                            </div>
                        </div>
                        <div className="detail">
                            <div className="detail-icon">
                                <img src={humidity_icon} alt="" className="d-icon"/>
                            </div>
                            <div className="detail-info">
                                20% <br/>Humidity
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;