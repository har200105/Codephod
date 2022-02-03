import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { opportunityReducer, workShopReducer } from './Reducers/HomeReducer';

const rootReducer = combineReducers({
    opportunityReducer: opportunityReducer,
    workShopReducer: workShopReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;