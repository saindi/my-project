import Logo from "./Logo/Logo.jsx";
import Form from "./Form/Form.jsx";
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <Logo name='Pizza Day' href='/' />
            <Form />
        </div>
    )
}

export default Header;