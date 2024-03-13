import React from 'react'
import Query from './section/QueryForm'
import Hero from './section/Hero'
import TableSection from './section/TableSection'
import RegisterForm from './section/RegisterForm'
import BenefitSection from './section/BenefitSection'

const Homepage = () => {
  return (
    <>
      <main className='homepage'>
        <Query />
        <Hero />
        <TableSection />
        <RegisterForm />
        <BenefitSection />
      </main>
    </>
  )
}

export default Homepage