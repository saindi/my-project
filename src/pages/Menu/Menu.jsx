import './Menu.css';
import {useContext, useMemo} from "react";
import MenuList from "./MenuList/MenuList.jsx";
import {Navigate} from "react-router-dom";
import {UserContext} from "../../context/UserContext.jsx";
import {SearchValueContext} from "../../context/SearchValueContext.jsx";
import useFetch from "../../hooks/useFetch.jsx";

function Menu() {
    const {user} = useContext(UserContext);
    const {searchValue} = useContext(SearchValueContext);

    const {data, isLoading, error} = useFetch("https://react-fast-pizza-api.onrender.com/api/menu")

    const filteredPizzas = useMemo(() => {
        const pizzas_data = data.data

        if (error || data.status !== "success" || !pizzas_data) return [];

        if (searchValue) {
            return pizzas_data.filter(pizza =>
                pizza.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        } else {
            return pizzas_data;
        }
    }, [searchValue, data]);

    if (!user.isAuth) {
        return <Navigate to="/login" />
    }

    if (isLoading) {
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
