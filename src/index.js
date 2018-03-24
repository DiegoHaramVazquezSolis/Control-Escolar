import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import './css/main.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "./redux/configureStore";

export const store = configureStore();

const RouterService = () => (
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider>
    </BrowserRouter>
)

ReactDOM.render(<RouterService />, document.getElementById('root'));
registerServiceWorker();
