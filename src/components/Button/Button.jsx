import './Button.css'

const Button = (props) => {
    const {text, type, onClick} = props

    return (
        <button type={type} onClick={onClick}>{text}</button>
    )
}

export default Button;