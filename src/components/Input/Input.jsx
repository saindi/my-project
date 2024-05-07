import './Input.css'

const Input = (props) => {
    const {type, placeholder= '', name= 'input', className = "input"} = props

    return (
        <input type={type} placeholder={placeholder} name={name} className={className} required/>
    )
}

export default Input;