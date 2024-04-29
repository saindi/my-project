import './MenuItem.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";

function MenuItem(props) {
    const {data} = props;

    const [pizzaState, setPizzaState] = useState({inBasket: false, count: 0})

    const addToCard = () => {
        setPizzaState({count: 1, inBasket: true})
    }

    const deleteFromCard = () => {
        setPizzaState({inBasket: false, count: 0})
    }

    const incPizzaInCard = () => {
        setPizzaState(prevState => ({...prevState, count: prevState.count + 1}))
    }

    const decPizzaInCard = () => {
        if (pizzaState.count !== 1)
            setPizzaState(prevState => ({...prevState, count: prevState.count - 1}))
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
                            {pizzaState.inBasket ? (
                                <>
                                    <div className='counter_form'>
                                        <Button text='-' onClick={decPizzaInCard} type='button'/>
                                        <div>{pizzaState.count}</div>
                                        <Button text='+' onClick={incPizzaInCard} type='button'/>
                                    </div>
                                    <Button text='DELETE' onClick={deleteFromCard} type='button'/>
                                </>) :
                                <Button text='ADD TO CARD' onClick={addToCard} type='button'/>
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