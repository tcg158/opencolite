import React from 'react';
import ReactDOM from 'react-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import './css/style.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {store} from "./store/configuration";
import {Provider} from "react-redux";


ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
