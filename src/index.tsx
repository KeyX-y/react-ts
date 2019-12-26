import * as React from "react";
import * as ReactDom from "react-dom";

import { Provider } from 'react-redux'

// 引入路由
// 路由的容器:HashRouter as Router
// 路由的规格:Route
// Link组件
import { BrowserRouter as Router,Route,Link } from "react-router-dom"

import store from './store'
import CounterComponent from "./components/Counter";

ReactDom.render(
  <Provider store={store}>
    <CounterComponent name="xiao" />
  </Provider>,
  document.getElementById('app')
)