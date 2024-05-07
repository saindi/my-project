import './App.css'
import Menu from "./components/Menu/Menu.jsx";
import {useState} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import SingIn from "./components/SingIn/SingIn.jsx";
import About from "./components/About/About.jsx";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [inputSearchValue, setInputValue] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.input.value;
        setInputValue(value);
    };

    return (
        <div>
            <Routes>
                <Route element={<Layout isAuth={isAuth} handleSearchSubmit={handleSearchSubmit} />}>
                    <Route path='/' element={<About />}/>
                    <Route path='/menu' element={<Menu sortByValue={inputSearchValue} isAuth={isAuth} />}/>
                    <Route path='/login' element={<SingIn isAuth={isAuth} setIsAuth={setIsAuth} />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App