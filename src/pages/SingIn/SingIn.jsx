import {Navigate} from "react-router-dom";
import { useContext } from "react";
import Button from "../../components/Button/Button.jsx";
import Input from "../../components/Input/Input.jsx";
import {UserContext} from "../../context/UserContext.jsx";

function SingIn() {
    const {user, changeUser} = useContext(UserContext);

    const handleLoginSubmit = (e) => {
        const value = e.target.elements.username.value;
        changeUser(value, true);
        return <Navigate to="/menu" />
    };

    if (user.isAuth) {
        return <Navigate to="/menu" />
    }

    return (
        <div className="row">
            <div className="col-sm-9 col-md-7 col-lg-4 mx-auto">
                <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h5 className="card-title text-center mb-3 fw-light fs-5 text font">Sign In</h5>
                        <form onSubmit={handleLoginSubmit}>

                            <p className="m-2">
                                <Input className="form-control input" type='text' placeholder='Username' name='username' />
                            </p>

                            <p className="m-2">
                                <Input className="form-control input" type='password' placeholder='Password' name='password' />
                            </p>

                            <div className="d-grid m-2">
                                <Button text="Sing In" type="submit"/>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingIn