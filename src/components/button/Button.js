import React, { memo } from 'react'
import './Button.css'
const Button = (props) => {
  return (
    <button
      className={`Button ${props.className}`}
      onClick={() => props.onClick()}
    >
      { props.text }
    </button>
  )
};
export default memo(Button)