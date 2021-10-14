import React, { FC } from "react";
import Bottom from "../bottom";
import Top from "../top";

import styles from "./app.module.scss";

const App: FC = () => {
    console.log(styles);
    return (
        <div className={styles.container}>
            <Top/>
            <Bottom/>
        </div>
    );
}

export default App;
