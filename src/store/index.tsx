import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// 引入redux-thunk，处理异步
// 现在主流处理异步的是saga和thunk
import thunk from "redux-thunk";

import reducers from './reducers'

const middle = applyMiddleware(thunk, logger)

let store = createStore(reducers, middle)

export default store