import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { opportunityReducer, workShopReducer } from './Reducers/HomeReducer';
import { addQAReducer, getMyQAReducer, getQAReducer } from './Reducers/qaReducer';
import { addProjectCommentReducer, addProjectsReducer, addReplyReducer, deleteProjectsReducer, getProjectsReducer } from './Reducers/projectReducer';
import { addCodingReducer, addWorkshopReducer, getCodingReducer } from './Reducers/codingReducer';
import { getMyPostsReducer, getUserReducer } from './Reducers/userReducer';

const rootReducer = combineReducers({
    opportunityReducer: opportunityReducer,
    workShopReducer: workShopReducer,
    getQAReducer:getQAReducer,
    addQAReducer:addQAReducer,
    getProjectsReducer:getProjectsReducer,
    addProjectsReducer:addProjectsReducer,
    getCodingReducer:getCodingReducer,
    addCodingReducer:addCodingReducer,
    getMyPostsReducer: getMyPostsReducer,
    getUserReducer: getUserReducer,
    addProjectCommentReducer: addProjectCommentReducer,
    getMyQAReducer: getMyQAReducer,
    addWorkshopReducer: addWorkshopReducer,
    deleteProjectsReducer: deleteProjectsReducer,
    addReplyReducer:addReplyReducer
});

const middleware = [thunk];

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));
export default store;