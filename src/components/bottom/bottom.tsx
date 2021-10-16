import React, { FC } from "react";
import "./style.scss";

interface IBottomProps {
    sunrise: number;
    sunset: number;
    temp_min: number;
    temp_max: number;
    onChangeSelect: (value: string) => void;
}

const Bottom: FC<IBottomProps> = ({ sunrise, sunset, temp_min, temp_max, onChangeSelect }) => {
    const _sunrise = new Date(sunrise * 1000);
    const _sunset = new Date(sunset * 1000);

    const changeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChangeSelect(event.target.value);
    }

    const cities = [
        "moscow", "minsk", "berlin",
        "london", "paris", "rome", 
        "istanbul", "madrid", "saint petersburg"
    ];
    
    return (
        <div className="bottom">
            <div className="bottom__info">
                <div className="bottom__info__item">Sunrise: {_sunrise.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">Sunset: {_sunset.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">MIN: {temp_min}&#176;</div>
                <div className="bottom__info__item">MAX: {temp_max}&#176;</div>
            </div>
            <div className="bottom__selecter">
                <select className="select" name="city" id="city" onChange={e => changeHandler(e)}>
                    {
                        cities.map((city) => (
                            <option key={city} value={city}>{city.toUpperCase()}</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
}

export default Bottom;
