import React from 'react'

export default function Title ({ containerClass, titleClass, title, lineClass}) {
  return (
    <div className={containerClass}>
      <p className={titleClass}>{title}</p>
      <hr className={lineClass} />
    </div>
  )
}
