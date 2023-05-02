import React, { FC } from "react";
import style from './Loader.module.scss'

export interface ILoaderProps{
    text?: string;
    display?: string;
}

const Loader:FC <ILoaderProps> = ({ text, display }) => {

    return (
        <div>
            <h1 className={style.loaderTitle} style={{ display: `${display}`}}>{text}</h1>
            <div className={style.loaderText}>
                Loading...
            </div>
        </div>

    );
}
export default Loader;