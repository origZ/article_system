import authRoute from '@/components/authRoute'
import React, { memo } from 'react'
import { UserWrapper } from './style'

const User = memo(() => {
  return (
    <UserWrapper>User</UserWrapper>
  )
})

export default authRoute(User)