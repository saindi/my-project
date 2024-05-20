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

                <div className="center-nav">
                    <Link className='text-nav nav-element' to="/menu">Menu</Link>
                    <Link className='text-nav nav-element' to="/order/new">Create order</Link>
                </div>


                {user.isAuth ? (
                    <form onSubmit={handleSearchSubmit}>
                        <Input type='text' placeholder='Search' name='searhValueInput' required={false}/>
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