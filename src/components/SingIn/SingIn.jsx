import {Navigate} from "react-router-dom";
import Button from "../Button/Button.jsx";
import Input from "../Input/Input.jsx";

function SingIn({isAuth, setIsAuth}) {
    const handleLoginSubmit = () => {
        setIsAuth(true);
        return <Navigate to="/menu" />
    };

    if (isAuth) {
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