import React from "react";
import styles from './Results.module.css'

function Results({weatherData}){
    if(!weatherData.main || !weatherData.weather){
        return <p>Please enter a City </p>
    }
    const url = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    return(
        <div className={styles.container}>
            <div className={styles.subContainer}>
                <p>{weatherData.weather[0].description}</p>
                <img src = {url} alt = {weatherData.weather[0].main} className={styles.image}/>
            </div>
            <div className={styles.subContainer}>
                <p>Location: {weatherData.name}</p>
                <p>Temperature: {weatherData.main.temp}°</p>
                <p>Feels Like: {weatherData.main.feels_like}°</p>
                <p>Temperature Min: {weatherData.main.temp_min}°</p>
                <p>Temperature Max: {weatherData.main.temp_max}°</p>
            </div>
        </div>
    );
}

export default Results;