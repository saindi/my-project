import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import UserContextProvider from "./context/UserContext.jsx";
import SearchValueContextProvider from "./context/SearchValueContext.jsx";
import {Provider} from "react-redux";
import {store} from "./store/store.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <UserContextProvider>
            <SearchValueContextProvider>
                <Provider store={store}>
                    <App/>
                </Provider>

            </ SearchValueContextProvider>
        </UserContextProvider>
    </BrowserRouter>
);
