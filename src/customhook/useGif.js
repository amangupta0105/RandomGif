import { useEffect, useState } from "react";
function useGif(tag){
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);
    const api_key = process.env.REACT_APP_API_MEME_GIF_KEY;

    async function randomGif() {
        setLoading(true);
        try {
            let data = !tag ? await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`) : await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${tag}`)
            let output = await data.json();
            let ans = output.data.images.downsized_large.url;
            setGif(ans);
        } catch (error) {
            console.error("Error fetching or parsing data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(function () {
        randomGif();
    }, []);

    return {gif,loading,randomGif}
}

export default useGif;