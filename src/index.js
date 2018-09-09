import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/index'
import {createStore} from "redux"
import {Provider} from "react-redux"
const Store = createStore(rootReducer)  
ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root'));
