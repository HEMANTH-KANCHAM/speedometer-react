import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increment = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({
        speed: prevState.speed + 10,
      }))
    }
  }

  break = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({
        speed: prevState.speed - 10,
      }))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="speedometer-heading">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speedometer-speed">Speed is {speed}mph</h1>
        <p className="speedometer-description">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div>
          <button
            onClick={this.increment}
            className="accelerate-button button"
            type="button"
          >
            Accelerate
          </button>
          <button
            onClick={this.break}
            className="brake-button button"
            type="button"
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
