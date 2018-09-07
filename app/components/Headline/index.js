import React, { Component } from "react"
import "./styles.less"

export default class Headline extends Component {
  render() {
    const { children } = this.props

    return (
      <div className="Headline">
        <h1>{ children }</h1>
      </div>
    )
  }
}
