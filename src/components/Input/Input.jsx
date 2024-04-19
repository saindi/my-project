import './Input.css'

const Input = (props) => {
    // eslint-disable-next-line react/prop-types
    const {type, placeholder= ''} = props

    return (
        <input type={type} placeholder={placeholder}/>
    )
}

export default Input;