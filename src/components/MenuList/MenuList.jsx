import './MenuList.css';
import MenuItem from "../MenuItem/MenuItem.jsx";
import { useEffect, useState } from "react";

function MenuList({ sortByValue }) {
    const [pizzas, setPizzas] = useState([]);
    const [filteredPizzas, setFilteredPizzas] = useState([]);

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

    useEffect(() => {
        if (sortByValue) {
            const filtered = pizzas.filter(pizza =>
                pizza.name.toLowerCase().includes(sortByValue.toLowerCase())
            );
            setFilteredPizzas(filtered);
        } else {
            setFilteredPizzas(pizzas);
        }
    }, [sortByValue, pizzas]);

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
                    {filteredPizzas.map(pizza => (
                        <MenuItem data={pizza} key={pizza.id} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default MenuList;
