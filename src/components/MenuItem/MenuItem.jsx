import './MenuItem.css'
import Button from "../Button/Button.jsx";
import {useState} from "react";

function MenuItem(props) {
    const {data} = props;

    const [countInBasket , setCountInBasket] = useState(0)

    const deleteFromCard = () => {
        setCountInBasket(0)
    }

    const incPizzaInCard = () => {
        setCountInBasket(prevState => prevState + 1)
    }

    const decPizzaInCard = () => {
        if (countInBasket !== 1)
            setCountInBasket(prevState => prevState - 1)
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
                            {countInBasket ? (
                                <>
                                    <div className='counter_form'>
                                        <Button text='-' onClick={decPizzaInCard} type='button'/>
                                        <div>{countInBasket}</div>
                                        <Button text='+' onClick={incPizzaInCard} type='button'/>
                                    </div>
                                    <Button text='DELETE' onClick={deleteFromCard} type='button'/>
                                </>) :
                                <Button text='ADD TO CARD' onClick={incPizzaInCard} type='button'/>
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