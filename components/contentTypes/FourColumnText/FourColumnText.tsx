import React from 'react'
import FourColumnLayout from '../../molecules/FourColumnLayout/FourColumnLayout'

const FourColumnText = (data: any) => {
  return (
    <section role="contentinfo" className="border-b border-gray-light">
      <div className="container">
        <FourColumnLayout informationArray={data.columnItems} />
      </div>
    </section>
  )
}

export default FourColumnText
