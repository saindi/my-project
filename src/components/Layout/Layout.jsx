import './Layout.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import Input from "../Input/Input.jsx";

function Layout({isAuth, handleSearchSubmit}) {

    return (
        <>
            <div className="header">
                <Link className='text-nav' to="/menu">Pizza Day</Link>

                {isAuth ? (
                    <form onSubmit={handleSearchSubmit}>
                        <Input type='text' placeholder='Search for the order' />
                    </form>
                ) : (
                    <NavLink to='/login' className="text-nav">Login</NavLink>
                )}

            </div>

            <Outlet />
        </>
    )
}

export default Layout