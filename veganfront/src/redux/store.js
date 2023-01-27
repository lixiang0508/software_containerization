/* 该文件专门用来暴露store对象 整个应用只有一个store对象 */


//引入createStore 专门用于创建redux中最为核心的store对象
import { createStore ,applyMiddleware,compose} from 'redux'
import {combineReducers} from "redux-immutable";
//引入为Count组件服务的reducer
import headerReducer from "./reducers/header";
import blogHomeReducer from "./reducers/BlogHome";
import blogDetailReducer from "../pages/BlogDetail/store/reducer"
import loginReducer from"../pages/Login/store/reducer"
import thunk from 'redux-thunk'

import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage: storage,
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const allReducer= combineReducers({
   // he:countReducer,
   // rens:personReducer
    header:headerReducer,
    blogHome:blogHomeReducer,
    blogDetail:blogDetailReducer,
    login:loginReducer


})//传入的对象就是redux里保存的总状态对象

/*
const myPersistReducer = persistReducer(persistConfig, allReducer)
const store = createStore(myPersistReducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
export default store
*/


//暴露store
export default createStore(allReducer,composeEnhancers(applyMiddleware(thunk)))