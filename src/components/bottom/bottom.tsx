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
    
    return (
        <div className="bottom">
            <div className="bottom__info">
                <div className="bottom__info__item">Sunrise: {_sunrise.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">Sunset: {_sunset.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">MIN: {temp_min}&#176;</div>
                <div className="bottom__info__item">MAX: {temp_max}&#176;</div>
            </div>
            <div className="bottom__selecter">
                <select name="city" id="city" onChange={e => changeHandler(e)}>
                    <option value="moscow">Moscow</option>
                    <option value="berlin">Berlin</option>
                    <option value="london">London</option>
                    <option value="paris">Paris</option>
                </select>
            </div>
        </div>
    );
}

export default Bottom;
