import axios from "axios";
import React, { useEffect, useState } from "react";
import Bottom from "../bottom";
import Top from "../top";
import { WeatherResponse } from "../../models/weather-response";

import styles from "./app.module.scss";

const App = () => {
    const [response, setResponse] = useState<WeatherResponse>({} as WeatherResponse);
    const [city, setCity] = useState<string>("moscow");

    useEffect(() => {
        getData();
    }, [city]);

    const getData = async() => {
        const response = await axios.get<WeatherResponse>("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: city,
                units: "metric",
                appid: `${process.env.REACT_APP_SECRET_KEY}`
            }
        }).then(resp => resp.data)
        .then(resp => {
            setResponse(resp);
        });
        return response;
    }

    const changeSelect = (value: string) => {
        setCity(value);
    }

    return (
        <div className={styles.container}>
            <Top name={response.name} 
                 temp={response.main?.temp} 
                 weatherMain={response.weather !== undefined ? response.weather[0].main : ""} 
                 humidity={response.main?.humidity} 
                 wind={response.wind?.speed} />

            <Bottom onChangeSelect={changeSelect}
                    sunrise={response.sys?.sunrise} 
                    sunset={response.sys?.sunset} 
                    temp_min={response.main?.temp_min} 
                    temp_max={response.main?.temp_max} />
        </div>
    );
}

export default App;
