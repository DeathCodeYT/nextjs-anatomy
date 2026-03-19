"use client"
import React from 'react'

export default function Error({error,reset}) {
  return (
    <div className='m-20'>Error : {error?.message} <button onClick={()=>reset()}>refresh</button></div>

  )
}
