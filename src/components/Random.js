import { useEffect, useState } from "react";
import './Random.css';
import useGif from "../customhook/useGif";

function Random() {

    const {gif,loading,randomGif } = useGif();

    return (
        <div className="random">
            <h1 className="random-heading">
                A RANDOM GIF
            </h1>
            <div className="random-image">
                {loading ? <span className="loader"></span> : <img src={gif} alt="Random-GIF" />}
            </div>
            <button className="random-button" onClick={()=> randomGif()}>
                Generate
            </button>
        </div>
    );
}

export default Random;
