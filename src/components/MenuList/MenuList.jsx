import MenuItem from "../MenuItem/MenuItem.jsx";
import pizzas from "../../data.js";
import './MenuList.css'

function MenuList() {
    return (
        <div className="wrapper">
            <ul>
                {pizzas.map((data) => (
                    <MenuItem data={data} key={data.id}/>
                ))}
            </ul>
        </div>
    )
}

export default MenuList