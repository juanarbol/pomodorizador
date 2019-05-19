import React, { memo } from 'react'
import './TimerDisplay.css'

const TimerDisplay = ({ hours, minutes, seconds }) => {
  document.title = `${hours}:${minutes}:${seconds}`

  return (
    <span className='timer-info'>{ `${hours}:${minutes}:${seconds}` }</span>
  )
}

export default memo(TimerDisplay)
