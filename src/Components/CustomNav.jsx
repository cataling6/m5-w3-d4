import useDebounce from "../Hooks/useDebounce";
import useWindowSize from "../Hooks/useWindowSize";
import { BookContext } from "./Context/BookContext";
import { useContext, useState, } from "react";

const CustomNav = () => {
    const { data, isLoading, error, getBooks } = useContext(BookContext);
    const { width, height } = useWindowSize();
    const [inputValue, setInputValue] = useState("");
    const onChangeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    console.log(height, width);
    const debouncedInputValue = useDebounce(inputValue, 2000)

    return <>
        <h1 className="text-dark">Ciao</h1>
        <input type="text" onChange={onChangeInputValue}></input>
        <p>Valore con delay: {debouncedInputValue}</p>
    </>
}
export default CustomNav;
