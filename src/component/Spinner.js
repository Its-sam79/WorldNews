import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt='spinner' height={'50px'}/>
      </div>
    )
  }
}

export default Spinner
