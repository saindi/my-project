import "./PizzaCountForm.css"
import Button from "../../Button/Button.jsx";

function PizzaCountForm({pizzaState, setPizzaState}) {

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
        <>
            <div className='counter_form'>
                <Button text='-' onClick={decPizzaInCard} type='button'/>
                <div>{pizzaState.count}</div>
                <Button text='+' onClick={incPizzaInCard} type='button'/>
            </div>

            <Button text='DELETE' onClick={deleteFromCard} type='button'/>
        </>
    )
}

export default PizzaCountForm