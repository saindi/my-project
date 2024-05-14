import './Input.css'

const Input = (props) => {
    const {type, placeholder= '', name= 'input', className = "input", required = true} = props

    return (
        <input type={type} placeholder={placeholder} name={name} className={className}  required={required} />
    )
}

export default Input;