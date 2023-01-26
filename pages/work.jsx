import React from 'react'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero  heading={'Work'} message={'This is the work page'} />
        <Portfolio />
    </div>
  )
}

export default work