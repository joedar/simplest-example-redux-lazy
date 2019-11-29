import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../redux/actions'

class Counter extends Component {
  increment = () => {
    this.props.dispatch(increment())
  }
  decrement = () => {
    this.props.dispatch(decrement())
  }
  render () {
    const { count } = this.props
    return (
      <div>
        <h3>Count is: {count}</h3>
        <button onClick={this.increment}>增加+1</button>
        <button onClick={this.decrement}>减少-1</button>
      </div>
    )
  }
}

const mapStateToProps = ({ count }) => ({ count })

export default connect(mapStateToProps)(Counter)
