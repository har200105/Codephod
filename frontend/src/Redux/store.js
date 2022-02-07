import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { opportunityReducer, workShopReducer } from './Reducers/HomeReducer';
import { addQAReducer, getQAReducer } from './Reducers/qaReducer';
import { addProjectsReducer, getProjectsReducer } from './Reducers/projectReducer';
import { addCodingReducer, getCodingReducer } from './Reducers/codingReducer';
import { getMyPostsReducer } from './Reducers/userReducer';

const rootReducer = combineReducers({
    opportunityReducer: opportunityReducer,
    workShopReducer: workShopReducer,
    getQAReducer:getQAReducer,
    addQAReducer:addQAReducer,
    getProjectsReducer:getProjectsReducer,
    addProjectsReducer:addProjectsReducer,
    getCodingReducer:getCodingReducer,
    addCodingReducer:addCodingReducer,
    getMyPostsReducer:getMyPostsReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;