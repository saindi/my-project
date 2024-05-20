import './App.css'
import Menu from "./pages/Menu/Menu.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import SingIn from "./pages/SingIn/SingIn.jsx";
import About from "./pages/About/About.jsx";
import Order from "./pages/Order/Order.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<About />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/login' element={<SingIn />}/>
                    <Route path='/order/new' element={<Order />}/>
                </Route>
            </Routes>
        </div>
    )
}

export default App