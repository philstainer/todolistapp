import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

export const middlewares = [ReduxThunk];

const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(...middlewares))(createStore);

export default createStoreWithMiddleware(rootReducer);
