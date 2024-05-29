import './MenuItem.css'
import Button from "../../../components/Button/Button.jsx";
import {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToCart, decrementFromCart, deleteFromCart, incrementFromCart} from "../../../store/slices/cardSlice.js";

function MenuItem(props) {
    const {data} = props;

    const [cartItem , setCartItem] = useState(null)

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);

    useEffect(() => {
        const itemInCart = cart.find(item => item.id === data.id);
        if (itemInCart) {
            setCartItem(itemInCart);
        } else {
            setCartItem(null);
        }
    }, [cart, data.id]);

    const addPizzaToCard = (data) => {
        dispatch(addToCart(data))
        setCartItem(data)
    }

    const deleteFromCard = (data) => {
        dispatch(deleteFromCart(data))
    }

    const incPizzaInCard = (data) => {
        dispatch(incrementFromCart(data))
    }

    const decPizzaInCard = () => {
        dispatch(decrementFromCart(data))
    }

    return (
        <div>
            <li className="pizza">
                <img src={data.imageUrl} className="pizza__image" alt=""/>
                <div className="pizza__info">
                    <p className="pizza__name">{data.name}</p>
                    <p className="pizza__ingredients">{data.ingredients.join(", ")}</p>

                    {!data.soldOut &&
                        <div className="pizza__actions">
                            <p className="pizza__price">€{data.unitPrice}</p>
                            {cartItem ? (
                                <>
                                    <div className='counter_form'>
                                        <Button text='-' onClick={() => decPizzaInCard(data)} type='button'/>
                                        <div>{cartItem.qty}</div>
                                        <Button text='+' onClick={() => incPizzaInCard(data)} type='button'/>
                                    </div>
                                    <Button text='DELETE' onClick={() => deleteFromCard(data)} type='button'/>
                                </>) :
                                <Button text='ADD TO CARD' onClick={() => addPizzaToCard(data)} type='button'/>
                            }
                        </div>
                    }

                    {data.soldOut &&
                        <div className="pizza__actions__disable">
                            <p className="pizza__price__disable">SOLD OUT</p>
                        </div>
                    }

                </div>
            </li>
            <hr/>
        </div>
    )
}

export default MenuItem