import React, { FC } from "react";
import "./style.scss";

interface ITopProps {
    name: string;
    temp: number;
    weatherMain: string;
    humidity: number;
    wind: number;
}

const Top: FC<ITopProps> = ({ name, temp, weatherMain, humidity, wind }) => {
    return(
        <div className="top">
            <div className="info">
                <div className="info__degrees">{temp}&#176;</div>
                <div className="info__desc">{weatherMain}</div>
                <div className="info__addition">
                    <div className="info__addition-item">humidity:<br />{humidity}%</div>
                    <div className="info__addition-item">wind:<br />{wind} m/s</div>
                </div>
            </div>
            <div className="place">{name}</div>
        </div>
    );
}

export default Top;
