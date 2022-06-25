import React from 'react'

export default function Balance({state}) {
  return (
      <div className="container">
          {state>=0?<div className="alert alert-success" role="alert">$ {state}</div>:
          <div className="alert alert-danger" role="alert">$ {state}</div>}
          
      </div>
    
  )
}
