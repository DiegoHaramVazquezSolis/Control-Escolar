import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { userChecker } from './actions/userActions';
import { rootReducer } from './reducers/rootReducer';

export function configureStore() {
    const store = createStore(
        rootReducer,
        applyMiddleware(logger, thunk)
    );
    store.dispatch(userChecker());
    return store;
}
