import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await fetch(url)

                if (!res.ok) {
                    throw new Error("Failed fetch data")
                }

                const data = await res.json();
                setData(data);
            } catch (e) {
                setError(e.message);
            } finally {
                setIsLoading(false);
            }
        }

        console.log("use Fetch use Fetch use Fetch")

        getData();

    }, [url])

    return {
        data, isLoading, error
    }
}

export default useFetch;