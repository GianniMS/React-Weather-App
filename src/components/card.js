import React, {changeEvent, useState, useEffect} from "react";
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
            Micon: cloud_icon,
            search: "Amsterdam",
        };
    }

    componentDidMount() {
        this.fetchWeatherData(this.state.search);
    }

    fetchWeatherData = async (city) => {
        try {
            const apiKey = '854834913f70db7c4bf96528aab15ab7';
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

            const response = await axios.get(apiUrl);
            const temperatureInCelsius = response.data.main.temp - 273.15;

            let newMicon = cloud_icon; // Default value

            if (response.data.weather[0].icon === "01d" || response.data.weather[0].icon === "01n") {
                newMicon = clear_icon;
            } else if (response.data.weather[0].icon === "02d" || response.data.weather[0].icon === "02n") {
                newMicon = cloud_icon;
            } else if (response.data.weather[0].icon === "03d" || response.data.weather[0].icon === "03n") {
                newMicon = drizzle_icon;
            } else if (response.data.weather[0].icon === "04d" || response.data.weather[0].icon === "04n") {
                newMicon = drizzle_icon;
            } else if (response.data.weather[0].icon === "09d" || response.data.weather[0].icon === "09n") {
                newMicon = rain_icon;
            } else if (response.data.weather[0].icon === "10d" || response.data.weather[0].icon === "10n") {
                newMicon = rain_icon;
            } else if (response.data.weather[0].icon === "13" || response.data.weather[0].icon === "13n") {
                newMicon = snow_icon;
            } else {
                newMicon = clear_icon;
            }

            this.setState({
                Micon: newMicon,
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

    handleChange = (e) => {
        this.setState({
            search: e.target.value,
        });
    };

    handleSearch = () => {
        const { search } = this.state;
        this.fetchWeatherData(search);
    };

    render() {
        const {weatherData, loading, error, Micon, search} = this.state;

        return (
            <div className="card-main">
                <div className="search-bar">
                    <input type="text" className="search-input" placeholder="find your city.."
                           onChange={this.handleChange} value={search}/>
                    <div className="search-cover">
                        <img src={search_icon} alt="" className="search-icon" onClick={this.handleSearch}/>
                    </div>
                </div>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {weatherData && (
                    <div className="weather-all">
                        <div className="weather-main">
                            <div className="main-icon">
                                <img src={Micon} className="m-icon"/>
                            </div>
                            <div className="main-info">
                                {Math.round(weatherData.main.temp)}°C
                            </div>
                            <div className="main-location">
                                {weatherData.name}
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