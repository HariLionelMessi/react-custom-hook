
import axios from "axios";
import { useState } from "react";
import Spinner from "./Spinner";
import useGiphyHook from "../customhook/useGiphyHook";


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [searchTerm, setSearchTerm] = useState('car')
    // const [gif, setGif] = useState('')
    // const [loading, setLoading] = useState(false)
    // function clickHandler() {
    //     fetchData()
    // }

    // Fetching data
    // async function fetchData() {
    //     try {
    //         setLoading(true)
    //         const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchTerm}`
    //         const output = await axios.get(url)
    //         let img = output.data.data.images.downsized_medium.url;
    //         setLoading(false)
    //         setGif(img)
    //     } catch (error) {
    //         console.log(error)
    //     } finally {
    //         setLoading(false)
    //     }
    // }

    const { gif, loading, fetchData } = useGiphyHook(true, searchTerm);
    function clickHandler() {
        console.log(searchTerm);

        fetchData(searchTerm)
    }


    return (
        <div className="w-[90%] max-w-[500px] min-h-[150px] border border-black bg-blue-400
        flex flex-col items-center gap-y-4 py-3 px-2">
            <h1 className="text-3xl underline uppercase font-bold">Random Gif</h1>
            {
                loading
                    ? (<Spinner />)
                    : <img src={gif || "https://placehold.co/600x400"} alt="random-gif" className="w-10/12" />
            }
            <input type="text" className="text-center" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} id="" />
            <button className="w-10/12 bg-yellow-300" onClick={clickHandler}>Generate</button>
        </div>
    )
}

export default Tag