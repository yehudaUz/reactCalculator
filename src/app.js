
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  configureStore  from './config/store'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <h1>testing</h1>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))