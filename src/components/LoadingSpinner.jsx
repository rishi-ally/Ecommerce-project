import React from 'react'

const LoadingSpinner = () => {
  return (
<div class="spinner-border" style={{width: "3rem", height:" 3rem",marginLeft:"50%",marginTop:"20%"}} role="status">
  <span class="visually-hidden">Loading...</span>
</div>
  )
}

export default LoadingSpinner