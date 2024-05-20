import './Order.css';
import {UserContext} from "../../context/UserContext.jsx";
import {Navigate} from "react-router-dom";
import {useContext} from "react";
import {useForm} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";


const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/

const formSchema = Yup.object().shape({
    username: Yup.string().min(4).required("First Name is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().required("Address is required"),
    isPriority: Yup.boolean(),
})


function Order() {
    const {user} = useContext(UserContext);
    const {register, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    if (!user.isAuth) {
        return <Navigate to="/login" />
    }

    return (
        <div className="order-body">

            <h2 className="form-title">Ready to order? Let`s go!</h2>

            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">First Name</label>
                        <input {...register('username')} type="text" placeholder="First Name" className="input"/>
                    </div>

                    {errors.username && <p className={"error-msg"}>{errors.username.message}</p>}
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">Phone number</label>
                        <input {...register('phoneNumber')} type="text" placeholder="Phone number" className="input"/>
                    </div>
                    {errors.phoneNumber && <p className={"error-msg"}>{errors.phoneNumber.message}</p>}
                </div>

                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">Address</label>
                        <input {...register('address')} type="text" placeholder="Address" className="input"/>
                    </div>
                    {errors.address && <p className={"error-msg"}>{errors.address.message}</p>}
                </div>

                <div className="form-solo">
                    <input {...register('isPriority')} type="checkbox" className="input-checkbox"/>
                    <label>Want to yo give your order priority?</label>
                </div>

                <button type="submit" disabled={!isValid}>Order now</button>
            </form>
        </div>
    )
}

export default Order