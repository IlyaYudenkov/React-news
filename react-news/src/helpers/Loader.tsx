import React, { FC } from "react";
import { ILoaderProps } from "../types/types";


const Loader:FC <ILoaderProps> = ({ text, display }) => {

    return (
        <div>
            <h1 style={{ display: `${display}`, fontSize:'30px' }}>{text}</h1>
            <div style={{ textAlign: 'center', fontSize: '17px' }}>
                Loading...
            </div>
        </div>

    );
}
export default Loader;