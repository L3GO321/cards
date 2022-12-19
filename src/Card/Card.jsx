import React from "react";

export const Card = ({ info, children }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      {children}

      <div className="card-body">
        <h5 className="card-title">{info.title}</h5>
        <p className="card-text">{info.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}