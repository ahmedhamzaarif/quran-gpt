import React from 'react'

const FaqItem = ({id, title, desc}) => {
  return (
    <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading${id}`}>
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${id}`} aria-expanded="false" aria-controls={`flush-collapse${id}`}>
            {title}
        </button>
        </h2>
        <div id={`flush-collapse${id}`} className="accordion-collapse collapse" aria-labelledby={`flush-heading${id}`} data-bs-parent="#accordionFlushExample">
        <div className="accordion-body">
            <div className="text-muted">{desc}</div>
        </div>
        </div>
    </div>
  )
}

export default FaqItem