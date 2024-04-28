import './MenuItem.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";
import PizzaCountForm from "./PizzaCountForm/PizzaCountForm.jsx";

function MenuItem(props) {
    const {data} = props;

    const [pizzaState, setPizzaState] = useState({inBasket: false, count: 0})

    const addToCard = () => {
        setPizzaState({count: 1, inBasket: true})
    }

    if (data.soldOut)
        return (
            <div>
                <li className="pizza">
                    <img src={data.imageUrl} className="pizza__image pizza__image__blur"/>
                    <div className="pizza__info">
                        <p className="pizza__name">{data.name}</p>
                        <p className="pizza__ingredients">{data.ingredients.join(", ")}</p>
                        <div className="pizza__actions__disable">
                            <p className="pizza__price__disable">SOLD OUT</p>
                        </div>
                    </div>
                </li>
                <hr/>
            </div>
        )

    return (
        <div>
            <li className="pizza">
                <img src={data.imageUrl} className="pizza__image"/>
                <div className="pizza__info">
                    <p className="pizza__name">{data.name}</p>
                    <p className="pizza__ingredients">{data.ingredients.join(", ")}</p>
                    <div className="pizza__actions">
                        <p className="pizza__price">€{data.unitPrice}</p>
                        {
                            pizzaState.inBasket ?
                                <PizzaCountForm pizzaState={pizzaState} setPizzaState={setPizzaState} /> :
                                <Button text='ADD TO CARD' onClick={addToCard} type='button'/>
                        }
                    </div>
                </div>
            </li>
            <hr/>
        </div>
    )
}

export default MenuItem