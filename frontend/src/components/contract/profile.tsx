'use client'

import React from 'react'
import { useAccount } from 'wagmi'


const Profile = () => {
    const account = useAccount();
  return (
    <div>
        <h1>Account details</h1>
        <div>Address: {account.address}</div>
    </div>
  )
}

export default Profile