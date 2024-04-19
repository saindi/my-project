import Input from "../../components/Input/Input.jsx";
import Button from "../../components/Button/Button.jsx";
import './Form.css'

const Form = () => {

    return (
        <form className="login-form">
            <Input type='text' placeholder='Your full name'/>
            <Button text='Login' type='button'/>
        </form>
    )
}

export default Form;