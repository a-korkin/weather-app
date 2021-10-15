import axios from "axios";
import React, { FC, useEffect } from "react";
import Bottom from "../bottom";
import Top from "../top";

import styles from "./app.module.scss";

const App: FC = () => {

    // useEffect(() => {
    //     const response = axios.get("https://api.openweathermap.org/data/2.5/weather", {
    //         params: {
    //             q: "moscow",
    //             units: "metric",
    //             appid: "a655b3757f3de4466c907af29571734c"
    //         }
    //     }).then(resp => resp.data);

    //     console.log(response);
    // }, []);

    console.log(process.env.REACT_APP_SECRET_KEY);

    return (
        <div className={styles.container}>
            <Top/>
            <Bottom/>
        </div>
    );
}

export default App;
