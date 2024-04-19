import './Button.css'

const Button = (props) => {
    // eslint-disable-next-line react/prop-types
    const {text, type} = props

    return (
        <button type={type}>{text}</button>
    )
}

export default Button;