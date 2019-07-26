import loadingGif from '../../img/loading.gif';
import './Loading.css'

import React from 'react'

export default function Loading() {
  return (
    <div className="loading-gif">
      <img src={loadingGif} alt="Loading. Please wait..."/>
    </div>
  )
}
