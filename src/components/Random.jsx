import axios from "axios";
import { useState, useEffect } from "react"
import Spinner from "./Spinner";
import useGiphyHook from "../customhook/useGiphyHook";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
// Z5MmuUmgelF0wkqzc3vhTaziXX2qC9jL

const Random = () => {
    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false)
    // async function fetchData() {
    //     try {
    //         setLoading(true)
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    //         const output = await axios.get(url)
    //         console.log(output);
    //         let img = output.data.data.images.downsized_large.url;
    //         setGif(img)
    //     } catch (error) {
    //         console.log(error);

    //     } finally {
    //         setLoading(false)
    //     }
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])

    const { gif, loading, fetchData } = useGiphyHook()

    function clickHandler() {
        fetchData()
    }

    // Fetching data

    return (
        <div className="w-[90%] max-w-[500px] min-h-[150px] border border-black bg-green-400
        flex flex-col items-center gap-y-4 py-3 px-2">
            <h1 className="text-3xl underline uppercase font-bold">Random Gif</h1>
            {
                loading
                    ? (<Spinner />)
                    : <img src={gif} alt="random-gif" className="w-10/12" />
            }
            <button className="w-10/12 bg-yellow-300" onClick={() => fetchData()}>Generate</button>
        </div>
    )
}

export default Random