import './OrderCreate.css';
import {Navigate, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {useForm, Controller} from "react-hook-form";
import * as Yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useSelector} from "react-redux";
import {UserContext} from "../../../context/UserContext.jsx";
import MenuItem from "../../Menu/MenuItem/MenuItem.jsx";
import Input from "../../../components/Input/Input.jsx";

const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/

const formSchema = Yup.object().shape({
    username: Yup.string().min(4).required("First Name is required"),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    address: Yup.string().required("Address is required"),
    isPriority: Yup.boolean(),
})

function Order() {
    const {user} = useContext(UserContext);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const {control, handleSubmit, formState: {errors, isValid}} = useForm({
        mode: "onBlur",
        resolver: yupResolver(formSchema),
    });

    const onSubmit = async (data) => {
        const orderData = {
            address: data.address,
            customer: data.username,
            phone: data.phoneNumber,
            priority: data.isPriority,
            position: "",
            cart: cart.cartItems.map(item => ({
                name: item.name,
                pizzaId: item.id,
                quantity: item.qty,
                totalPrice: item.qty * item.unitPrice,
                unitPrice: item.unitPrice,
            })),
        };

        try {
            const response = await fetch('https://react-fast-pizza-api.onrender.com/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(orderData),
            });

            const result = await response.json();

            if (result.status === 'success') {
                navigate(`/order/${result.data.id}`, { state: result.data });
            } else {
                alert('Something went wrong');
            }
        } catch (error) {
            alert('Something went wrong');
        }
    }

    if (!user.isAuth) {
        return <Navigate to="/login" />
    }

    if (cart.cartItems.length === 0) {
        return <Navigate to="/menu" />
    }

    return (
        <div className="order-body">
            <h2 className="form-title">Ready to order? Let`s go!</h2>
            {cart.cartItems.map(pizza => (<MenuItem data={pizza} key={pizza.id}/>))}
            <h2 className="form-title">Total price: {cart.totalPrice}€</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">First Name</label>
                        <Controller
                            control={control}
                            name="username"
                            render={({ field }) =>
                                <Input {...field} placeholder="First Name" type="text" className="input" />
                            }
                        />
                    </div>
                    {errors.username && <p className={"error-msg"}>{errors.username.message}</p>}
                </div>
                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">Phone number</label>
                        <Controller
                            control={control}
                            name="phoneNumber"
                            render={({ field }) =>
                                <Input {...field} placeholder="Phone number" type="text" className="input" />
                            }
                        />
                    </div>
                    {errors.phoneNumber && <p className={"error-msg"}>{errors.phoneNumber.message}</p>}
                </div>
                <div className="form-group">
                    <div className="form-item">
                        <label className="title-input">Address</label>
                        <Controller
                            control={control}
                            name="address"
                            render={({ field }) =>
                                <Input {...field} placeholder="Address" type="text" className="input" />
                            }
                        />
                    </div>
                    {errors.address && <p className={"error-msg"}>{errors.address.message}</p>}
                </div>
                <div className="form-solo">
                    <Controller
                        control={control}
                        name="isPriority"
                        render={({ field }) =>
                            <Input {...field} placeholder="First Name" type="checkbox" className="input-checkbox" />
                        }
                    />
                    <label>Want to give your order priority?</label>
                </div>
                <button type="submit" disabled={!isValid}>Order now</button>
            </form>
        </div>
    )
}

export default Order;
