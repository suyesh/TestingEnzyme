import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import patron from 'middleWares/patron'
import stateValidator from 'middleWares/stateValidator'
import reducers from 'reducers';


export default ({ children, initialState = {} }) => {
    const store = createStore(reducers, initialState, applyMiddleware(patron, stateValidator))
    return(
        <Provider store={store}>
          { children }
        </Provider>
    );
}
