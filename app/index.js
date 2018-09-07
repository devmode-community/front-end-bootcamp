import React, { Component } from "react"
import Headline from "./components/Headline"
import "./styles.less"

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline>Hello human!</Headline>
      </div>
    )
  }
}
