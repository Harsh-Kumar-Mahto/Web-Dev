import React from 'react'
import { useParams } from 'react-router-dom'

function Custom() {
  const {id}=useParams()
  return (
    <div>
      User:{id}
    </div>
  )
}

export default Custom
