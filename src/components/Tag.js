import {useEffect, useState} from "react";
import './Tag.css';
import useGif from "../customhook/useGif";

function Tag() {

    const [tag, setTag] = useState('welcome');
    const {gif,loading,randomGif } = useGif(tag);

    return (
        <div className="tag">
            <h1 className="tag-heading">
                RANDOM {tag}
                GIF
            </h1>
            <div className="tag-image">
                {
                    loading? <span className="loader"></span> : <img src={gif} alt="Random-GIF"/>
                }
            </div>
            <div className="tag-input">
                <input type="text" id="tagInput" onChange={(event)=>setTag(event.target.value)} value={tag}/>
            </div>
            <button className="tag-button" onClick={() =>  randomGif()}>
                Generate
            </button>
        </div>
    );
}

export default Tag;
