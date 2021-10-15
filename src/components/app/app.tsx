import axios from "axios";
import React, { FC, useEffect, useState } from "react";
import Bottom from "../bottom";
import Top from "../top";
import { WeatherResponse } from "../../models/weather-response";

import styles from "./app.module.scss";

const App: FC = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const response = getData();

        console.log(response.then(t => t.name));
    }, []);

    const getData = async() => {
        const response = await axios.get<WeatherResponse>("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                q: "moscow",
                units: "metric",
                appid: `${process.env.REACT_APP_SECRET_KEY}`
            }
        }).then(resp => resp.data);
        return response;
    }

    return (
        <div className={styles.container}>
            <Top/>
            <Bottom/>
        </div>
    );
}

export default App;
