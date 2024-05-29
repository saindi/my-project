const Input = ({ value, onChange, className="input",...props }) => {
    return (
        <input value={value || ''} onChange={onChange} {...props} className={className}/>
    );
};

export default Input;