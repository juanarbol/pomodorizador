import React, { Component } from 'react';
import './App.css';

import { duration } from 'moment'

import Button from './components/button/Button'
import TimerDisplay from './components/timer-diplay/TimerDisplay'

class App extends Component {
  constructor () {
    super()
    this.state = {
      timer: duration(25, 'minutes'),
      pause: true
    }

    this.clear = this.clear.bind(this)
    this.pause = this.pause.bind(this)
    this.start = this.start.bind(this)
  }

  interval

  clear () {
    this.setState({ timer: duration(25, 'minutes'), pause: true })
    clearInterval(this.interval)
  }

  pause () {
    this.setState({ pause: true })
    clearInterval(this.interval)
  }

  start () {
    this.setState({ pause: false })

    const second = duration(1, 'second')
    this.interval = setInterval(() => {
      this.setState(({ timer }) => ({ timer: timer.subtract(second) }))
    }, 1000)
  }

  render() {
    const { timer, pause } = this.state
    let timerAction
    let timerActionName
    let timerClassName
    
    if (pause) {
      timerAction = this.start
      timerActionName = 'Start'
      timerClassName = 'start'
    } else {
      timerAction = this.pause
      timerActionName = 'Pause'
      timerClassName = 'pause'
    }

    return (
      <div className="App">
        <h1 className="main-title">Pomodorizador</h1>
        <TimerDisplay
          hours={timer.hours()}
          minutes={timer.minutes()}
          seconds={timer.seconds()}
        >
        </TimerDisplay>
        <Button
          text={timerActionName}
          onClick={() => timerAction()}
          className={timerClassName}
        />
        <Button
          text="Clear"
          onClick={() => this.clear()}
          className="clear"
        />
      </div>
    );
  }
}

export default App;
