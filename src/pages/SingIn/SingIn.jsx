import {Navigate} from "react-router-dom";
import { useContext } from "react";
import Input from "../../components/Input/Input.jsx";
import {UserContext} from "../../context/UserContext.jsx";
import {Controller, useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";

const formSchema = Yup.object().shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().min(8).required("Password is required"),
})

function SingIn() {
    const {user, changeUser} = useContext(UserContext);
    const {control, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const handleLoginSubmit = (data) => {
        changeUser(data.email, true);
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
                        <form onSubmit={handleSubmit(handleLoginSubmit)} className="">
                            <div className="form-group">
                                <div className="form-item">

                                    <Controller
                                        control={control}
                                        name="email"
                                        render={({field}) =>
                                            <Input {...field} placeholder="Email" type="text" className="input"/>
                                        }
                                    />
                                </div>

                                {errors.email && <p className={"error-msg"}>{errors.email.message}</p>}
                            </div>

                            <div className="form-group">
                                <div className="form-item">
                                    <Controller
                                        control={control}
                                        name="password"
                                        render={({field}) =>
                                            <Input {...field} placeholder="Passwrod" type="text" className="input"/>
                                        }
                                    />
                                </div>
                                {errors.password && <p className={"error-msg"}>{errors.password.message}</p>}
                            </div>

                            <div className="d-grid m-2">
                                <button type="submit" disabled={!isValid}>Sign In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default SingIn