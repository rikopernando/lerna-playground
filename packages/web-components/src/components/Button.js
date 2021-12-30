import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, textColor }) => (
  <button style={{ color: textColor }}>
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  textColor: PropTypes.string.isRequired
}

export default Button

