import './Input.css'

const Input = (props) => {
    const {type, placeholder= '', name='input'} = props

    return (
        <input type={type} placeholder={placeholder} name={name}/>
    )
}

export default Input;