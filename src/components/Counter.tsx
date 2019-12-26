// import React from "react"; // 之前的写法
// 在ts中引入的写法
import * as React from "react";

// 引入connect，让组件和仓库建立连接
import { connect } from "react-redux";

// 引入actions，用于传给connect
import actions from "../store/actions/counter";

// 引入接口约束
import { Store } from "../types";

interface IProps {
  number: number,
  name: string,
  add: any,
  subtract: any,
  addAsync: any,
}

interface IState {
  number: number
}

class CounterComponent extends React.Component<IProps, IState> {
  render() {
    console.log(this.props)
    const { number, add, subtract, addAsync } = this.props
    return (
      <div>
        <h1>{this.props.name}</h1>
        <button onClick={add}>+</button><br />
        <button onClick={subtract}>-</button>
        <p>{number}</p>
      </div>
    )
  }
}


const mapStateToProps = function(state: Store) {
  return state
}

const mapPropsToState = {
  ...actions
}

export default connect(mapStateToProps,mapPropsToState)(CounterComponent)