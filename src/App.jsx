import './App.css'
import Button from "./components/Button/Button.jsx";
import Input from "./components/Input/Input.jsx";

function App() {
  return (
      <div>
          <h1>Hello, World!</h1>
          <h2>What is your name?</h2>
          <Input/>
          <Button text="Submit" type="submit" />
      </div>
  )
}

export default App