import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    //https://epibooks.onrender.com

    const getData = async () => {
        try {
            setIsLoading(true);
            const response = await fetch(endPoint);
            const datas = await response.json();
            setData(datas);

        } catch (e) {
            setError(e);
        }
        finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData();
    }, [endPoint])

    return { data, isLoading, error }
}
export default useFetch;