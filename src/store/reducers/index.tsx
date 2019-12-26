// 引入合并方法
import { combineReducers } from "redux";

// 引入需要合并的reducer
import counter from "./counter";


// 合并
let reducers = combineReducers({
  counter,
});
export default counter;