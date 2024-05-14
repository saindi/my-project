import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import SearchValueContextProvider from "./context/SearchValueContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
    <UserContextProvider>
        <SearchValueContextProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ SearchValueContextProvider>
    </UserContextProvider>
);
