import './MenuList.css';
import MenuItem from "../MenuItem/MenuItem.jsx";

function MenuList({ menu }) {
    return (
        menu.map(pizza => (<MenuItem data={pizza} key={pizza.id}/>))
    )
}

export default MenuList;
