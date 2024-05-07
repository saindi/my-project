import './Menu.css';
import { useEffect, useState } from "react";
import MenuList from "./MenuList/MenuList.jsx";

function Menu({ sortByValue }) {
    const [pizzas, setPizzas] = useState([]);

    const filteredPizzas = sortByValue
        ? pizzas.filter(pizza =>
            pizza.name.toLowerCase().includes(sortByValue.toLowerCase())
        )
        : pizzas;

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const res = await fetch("https://react-fast-pizza-api.onrender.com/api/menu");

                if (!res.ok) {
                    throw new Error("Error occurred while fetching menu");
                }

                const data = await res.json();
                setPizzas(data.data);
            } catch (e) {
                console.error("Fetch error:", e.message);
            }
        };

        fetchPizzas();
    }, []);

    if (pizzas.length === 0) {
        return (
            <div className="wrapper m-4">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <div className="wrapper">
            {filteredPizzas.length === 0 ? (
                <p className="message">No pizzas found. Try another search.</p>
            ) : (
                <ul>
                    <MenuList menu={filteredPizzas} />
                </ul>
            )}
        </div>
    );
}

export default Menu;
