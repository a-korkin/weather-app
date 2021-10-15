import React from "react";
import "./style.scss";

const Top = () => {
    return(
        <div className="top">
            <div className="info">
                <div className="info__degrees">12&#176;</div>
                <div className="info__desc">Clouds</div>
                <div className="info__addition">
                    <div className="info__addition-item">humidity:<br />64%</div>
                    <div className="info__addition-item">wind:<br />12 k/m</div>
                </div>
            </div>
            <div className="place">Cheboksary</div>
        </div>
    );
}

export default Top;
