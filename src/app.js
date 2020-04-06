
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './config/store'
import Calculator from './components/calculator'
import '../src/styles/style.css'

const store = configureStore()
//store.subscribe(() => console.log(store.getState()))

const jsx = (
    <Provider store={store}>
        <Calculator />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
