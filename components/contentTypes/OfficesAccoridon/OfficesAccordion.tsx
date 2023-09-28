import React from 'react'

import { OfficeAccordion } from '../../../types/CMS/index'
import LocationFinder from '../../organisms/LocationFinder/LocationFinder'

const OfficesAccordion = (data: OfficeAccordion) => {
  return (
    <section role="contentinfo" className="border-b border-gray-light">
      <div className="container">
        <LocationFinder title={data.title} continents={data.continents} />
      </div>
    </section>
  )
}

export default OfficesAccordion
