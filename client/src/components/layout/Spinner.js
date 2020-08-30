import React from 'react'
import spinner from '../../img/spinner.gif'

export const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        style={{ margin: '0 auto', display: 'block', width: '200px' }}
        alt='Loading...'
      />
    </div>
  )
}
