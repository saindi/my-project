import './App.css';
import Menu from "./pages/Menu/Menu.jsx";
import {Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import SingIn from "./pages/SingIn/SingIn.jsx";
import About from "./pages/About/About.jsx";
import OrderDetails from "./pages/Order/OrderDetails/OrderDetails.jsx";
import OrderCreate from "./pages/Order/OrderCreate/OrderCreate.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route element={<Layout />}>
                    <Route path='/' element={<About />}/>
                    <Route path='/menu' element={<Menu />}/>
                    <Route path='/login' element={<SingIn />}/>
                    <Route path='/order/new' element={<OrderCreate />}/>
                    <Route path='/order/:orderId' element={<OrderDetails />}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
