import React, { changeEvent, useState, useEffect} from "react";
import axios from "axios";

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
    constructor(props) {
        super(props);
        this.state = {
            weatherData: null,
            loading: true,
            error: null,
            imageSrc: cloud_icon
        };
    }

    componentDidMount() {
        this.fetchWeatherData("Amsterdam"); // You can set the default city here
    }

    fetchWeatherData = async (city) => {
        try {
            const apiKey = '854834913f70db7c4bf96528aab15ab7';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            const response = await axios.get(apiUrl);
            const temperatureInCelsius = response.data.main.temp - 273.15;

            this.setState({
                weatherData: {
                    ...response.data,
                    main: {
                        ...response.data.main,
                        temp: temperatureInCelsius,
                    },
                },
                loading: false,
            });
        } catch (error) {
            this.setState({
                error: error.message,
                loading: false,
            });
        }
    };

    render() {
        const {weatherData, loading, error, imageSrc} = this.state;

        return (
            <div className="card-main">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {weatherData && (
                    <div className="weather-all">
                        <div className="weather-main">
                            <div className="main-icon">
                                <img src={imageSrc} alt="" className="m-icon"/>
                            </div>
                            <div className="main-info">
                                {Math.round(weatherData.main.temp)}°C
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
                                    {weatherData.wind.speed} Km/H <br/> Wind Speed
                                </div>
                            </div>
                            <div className="detail">
                                <div className="detail-icon">
                                    <img src={humidity_icon} alt="" className="d-icon"/>
                                </div>
                                <div className="detail-info">
                                    {weatherData.main.humidity}% <br/>Humidity
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default Card;