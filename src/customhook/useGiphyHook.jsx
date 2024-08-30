import axios from "axios"
import { useState, useEffect } from "react"

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const useGiphyHook = (tag = false, searchTerm) => {
    // This is a instance, not the exact hook. So we pass it again in the function.
    const [gif, setGif] = useState('')
    const [loading, setLoading] = useState(false)
    // Fetching data
    async function fetchData(searchTerm) {
        try {
            setLoading(true)
            let apiFetch = tag ? `${url}&tag=${searchTerm}` : `${url}`
            const output = await axios.get(apiFetch)
            let img = output.data.data.images.downsized_medium.url;
            setLoading(false)
            setGif(img)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData(searchTerm || 'car')
    }, [])

    return { gif, loading, fetchData }
}

export default useGiphyHook