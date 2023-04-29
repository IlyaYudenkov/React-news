import React, { FC } from "react";

interface LoaderProps{
    text?: string;
    display?: string;
}


const Loader:FC <LoaderProps> = ({ text, display }) => {

    return (
        <div>
            <h1 style={{ display: `${display}` }}>{text}</h1>
            <div style={{ textAlign: 'center', fontSize: '17px' }}>
                Loading...
            </div>
        </div>

    );
}
export default Loader;