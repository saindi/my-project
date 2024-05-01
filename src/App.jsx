import './App.css'
import Input from "./components/Input/Input.jsx";
import Menu from "./components/Menu/Menu.jsx";
import {useState} from "react";

function App() {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.input.value;
        setInputValue(value);
    };

    return (
        <div>

            <div className="header">
                <a className='logo'>Pizza Day</a>
                <form onSubmit={handleSubmit}>
                    <Input type='text' placeholder='Search for the order' />
                </form>
            </div>

            <Menu sortByValue={inputValue} />

        </div>
    )
}

export default App