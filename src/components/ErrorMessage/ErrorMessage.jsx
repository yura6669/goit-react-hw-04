import React from 'react'
import css from './ErrorMessage.module.css'

const ErrorMessage = ({message}) => {
  return (
      <>
        <p className={css.message}>{ message }</p>
      </>
  )
}

export default ErrorMessage