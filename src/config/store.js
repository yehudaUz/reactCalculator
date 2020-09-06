import { createStore, combineReducers } from 'redux';
import calculationsReducer from '../reducers/calculationsReducer';

export default () => {
    const store = createStore(
        combineReducers({
            state: calculationsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

    return store;
};
