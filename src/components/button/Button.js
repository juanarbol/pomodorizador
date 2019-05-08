import React from 'react'
import './Button.css'
const Button = React.memo(function Button ({ text, className, onClick }) {
  return (
    <button
      className={`Button ${className}`}
      onClick={() => onClick()}
    >
      { text }
    </button>
  )
})

export default Button
