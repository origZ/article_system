import React, { memo } from 'react'
import { HomeWrapper } from './style'

const Home = memo(() => {
  return (
    <HomeWrapper>
      <div id='main' style={{width:"500px",height:"400px"}}></div>
    </HomeWrapper>
  )
})

export default Home