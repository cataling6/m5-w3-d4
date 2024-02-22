import { createContext } from "react";
import useFetch from "../../Hooks/useFetch";

export const BookContext = createContext();
export const BookProvider = ({ children }) => {
    //const { isLoading, data, error } = useFetch('https://epibooks.onrender.com')
    const { isLoading, data, error } = useFetch('https://dummyjson.com/products')
    return (
        <BookContext.Provider value={{ data, isLoading, error }}>
            {children}
        </BookContext.Provider>
    )
}

