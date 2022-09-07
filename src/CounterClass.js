import React, { Component } from 'react'

export default class CounterClass extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }

    this.incr = this.incr.bind(this)
    this.decr = this.decr.bind(this)
    this.reset = this.reset.bind(this)

  }

  incr() {
    this.setState(state => ({
      count:state.count + 1
    }))
  }

  decr() {
    this.setState(state => ({
      count:state.count - 1
    }))
  }

  reset() {
    this.setState(state => ({
      count:0
    }))
  }

  render() {
    return (
      <div className='counterClass'>
        <h2 className='description'>Counter based on Class Components</h2>
        <h1>{this.state.count}</h1>
        <button className='btn' onClick={this.incr}>incr</button>
        <button className='btn' onClick={this.decr}>decr</button>
        <button className='btn' onClick={this.reset}>reset</button>
      </div>
    )
  }
}

