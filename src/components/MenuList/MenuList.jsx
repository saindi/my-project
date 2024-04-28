import MenuItem from "../MenuItem/MenuItem.jsx";
import './MenuList.css'

function MenuList({pizzas}) {


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