import React from 'react'

const FeatureCol = ({icon, title, desc}) => {
  return (
    <div className="col-md-4">
        <i className={icon}></i>
        <h4>{title}</h4>
        <p className="lead">{desc}</p>
    </div>
  )
}

export default FeatureCol