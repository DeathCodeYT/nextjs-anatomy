import React from 'react'

export default async function Page() {
    const res = await fetch("http://localhost:3000/api/users")
    const data = await res.json()
    // console.log(data)
  return (
    <div className='flex gap-5'>
        {data.data.map(user=><span key={user.id}>{user.name}</span>)}
    </div>
  )
}
