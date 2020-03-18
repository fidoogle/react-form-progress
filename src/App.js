import React from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar'
import ProgressLabels from './components/ProgessLabels'
import ProgressOptions from './components/ProgessOptions'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      percentage: 0
    }

    this.nextStep = this.nextStep.bind(this)
  }

  nextStep() {
    if (this.state.percentage === 100) return
    this.setState(prevState => ({ percentage: prevState.percentage + 25 }))
  }

  render() {
    return (
      <div>

        <h2> Progress Filling a Form </h2>
        <div className="progress-wrapper">
          <ProgressLabels/>
          <ProgressBar percentage={this.state.percentage} />
        </div>
        <br/><br/>
        <div className="options-wrapper">
          <ProgressOptions percentage={this.state.percentage}  />
          
          <div style={{ marginTop: '20px' }}>
            <button
              onClick={this.nextStep}
            >
              Continue
            </button>
          </div>

          <div style={{ marginTop: '10px', color: 'blue', marginBottom: '15px' }} onClick={() => this.setState({ percentage: 0 })}>
            Reset
          </div>
        </div>
      </div>
    )
  }
}

export default App