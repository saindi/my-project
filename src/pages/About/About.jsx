import './About.css'
import Button from "../../components/Button/Button.jsx";
import {useNavigate} from "react-router-dom";

function About() {
    const navigate = useNavigate();

    return (
        <div className="content">
            <h1 className="title">
                The best pizza.<br/>
                <span className="text-yellow">Straight out of the oven, straight to you.</span>
            </h1>
            <p className="sub-title">👋 Welcome! Please see our menu:</p>
            <form className="login-form">
                <Button text='Menu' type='button' onClick={() => navigate("/menu")} />
            </form>
        </div>
    )
}

export default About