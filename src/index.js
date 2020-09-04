import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import patients from './redux/patients/patients_reducer';
import {Provider} from "react-redux";
import thunk from "redux-thunk";

const store = createStore(combineReducers({patients}),applyMiddleware(thunk));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
                <App /></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
