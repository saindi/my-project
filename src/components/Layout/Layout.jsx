import './Layout.css'
import {useContext} from "react";
import {Link, NavLink, Outlet} from "react-router-dom";
import Input from "../Input/Input.jsx";
import {UserContext} from "../../context/UserContext.jsx";
import {SearchValueContext} from "../../context/SearchValueContext.jsx";

function Layout() {
    const {user} = useContext(UserContext);
    const {changeSearchValue} = useContext(SearchValueContext);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        const value = e.target.elements.searhValueInput.value;
        changeSearchValue(value);
    };

    return (
        <>
            <div className="header">
                <Link className='text-nav' to="/">Pizza Day</Link>

                <Link className='text-nav' to="/menu">Menu</Link>

                {user.isAuth ? (
                    <form onSubmit={handleSearchSubmit}>
                        <Input type='text' placeholder='Search for the order' name='searhValueInput' required={false}/>
                    </form>
                ) : (
                    <NavLink to='/login' className="text-nav">Login</NavLink>
                )}

            </div>

            <Outlet />
        </>
    )
}

export default Layout;