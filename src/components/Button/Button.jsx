import './Button.css'

const Button = (props) => {
    const {text, type} = props

    return (
        <button type={type}>{text}</button>
    )
}

export default Button;