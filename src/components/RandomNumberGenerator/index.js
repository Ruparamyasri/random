// Write your code here
import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onIncrement = () => {
    const Random = Math.ceil(Math.random() * 100)
    this.setState({count: Random})
  }
  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button type="button" onClick={this.onIncrement}>
            Generate
          </button>
          <p>{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
