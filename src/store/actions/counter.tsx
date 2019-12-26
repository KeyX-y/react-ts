import * as types from '../action-types'

// 定义两个接口，分别约束add和subtract的type类型
export interface Add{
  type: typeof types.ADD
}
export interface Subtract{
  type: typeof types.SUBTRACT
}

// 再导出一个type
// type是用来给类型起别名的
// 这个actions里是一个对象，会有很多函数，每个函数都会返回一个action
// 而 ./store/reducers/index.tsx中的action会是下面某一个函数的返回值

export type Action = Add | Subtract

export default {
  add(): Add {
    return {type: types.ADD}
  },
  subtract(): Subtract{
    return { type: types.SUBTRACT}
  },

  // 异步请求
  addAsync(): any {
    return function(dispatch: any, getState: any) {
      setTimeout(function() {
        dispatch({type: types.ADD})
      }, 1000)
    }
  }
}