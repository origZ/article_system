import React, { memo } from 'react'
import { HomeWrapper } from './style'
import BarChart from './c-cpn'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <BarChart title='三大框架满意度' />
      <BarChart title='三大框架使用度' />
    </HomeWrapper>
  )
})

export default Home