import React from 'react'


const SectionHeader = ({ title, subtitle }) => {

  return (
    <div className="section-header border">
      <h1>{title}</h1>
      <h4>{subtitle}</h4>
    </div>
  )

}


export default SectionHeader
