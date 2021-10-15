import React, { FC } from "react";
import "./style.scss";

const Bottom: FC = () => {
    // console.log(ticksToDate(1634308213 * 1000));
    const sunrise = new Date(1634270404 * 1000);
    const sunset = new Date(1634308213 * 1000);
    console.log(`sunrise: ${sunrise.toLocaleTimeString("ru-RU")}, sunset: ${sunset}`);
    
    return (
        <div className="bottom">
            <div className="bottom__info">
                <div className="bottom__info__item">Sunrise: {sunrise.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">Sunset: {sunset.toLocaleTimeString("ru-RU")}</div>
                <div className="bottom__info__item">MIN: 6.01&#176;</div>
                <div className="bottom__info__item">MAX: 6.82&#176;</div>
            </div>
            <div className="bottom__selecter">
                <select name="city" id="city">
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
