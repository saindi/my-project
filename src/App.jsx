import './App.css'
import Input from "./components/Input/Input.jsx";
import Button from "./components/Button/Button.jsx";

function App() {
  return (
      <div className="wrapper">

          <div className="header">
              <a className='logo' href='/'>Pizza Day</a>
              <form action="">
                  <Input type='text' placeholder='Search for the order #'/>
              </form>
          </div>

          <div className="content">
              <h1 className="title">
                  The best pizza.<br/>
                  <span className="text-yellow">Straight out of the oven, straight to you.</span>
              </h1>
              <p className="sub-title">👋 Welcome! Please start by telling us your name:</p>
              <form className="login-form">
                  <Input type='text' placeholder='Your full name'/>
                  <Button text='Login' type='button'/>
              </form>
          </div>

      </div>
  )
}

export default App