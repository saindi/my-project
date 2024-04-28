import './App.css'
import Input from "./components/Input/Input.jsx";
import MenuList from "./components/MenuList/MenuList.jsx";
import pizzas from "./data.js";

function App() {
    return (
        <div>

            <div className="header">
                <a className='logo' href='/'>Pizza Day</a>
                <form action="">
                    <Input type='text' placeholder='Search for the order #'/>
                </form>
            </div>

            <MenuList pizzas={pizzas}/>

        </div>
    )
}

export default App