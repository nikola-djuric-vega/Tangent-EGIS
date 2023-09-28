import React from 'react'
import CTAPanel from '../../organisms/CTAPanel/CTAPanel'
import clsx from 'clsx'

const Cta = (data: any) => {
  return (
    <section
      className={clsx(
        {
          'md:left-steel-gray-lightest':
            data.dDLBackgroundColor === 'lightBlue',
          'md:left-super-lime-light': data.dDLBackgroundColor === 'lightGreen',
          'md:left-gray-lightest': data.dDLBackgroundColor === 'grey',
        },
        'border-b border-gray-light'
      )}
    >
      <div className="container">
        <CTAPanel
          title={data.title}
          image={data.image}
          description={data.introText}
          bgColor={data.dDLBackgroundColor}
          linkText={data.link?.name}
          linkTo={data.link?.url}
          animation={data.animation}
        />
      </div>
    </section>
  )
}

export default Cta
