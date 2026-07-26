import Counter from '@/components/Counter'
import React from 'react'

export default function Page() {
    const data = {title:"NextJs Anatomy - Counter",date:new Date().toISOString()}
    const mapData = new Map([
        ["a",1]
    ])
    const mySet = new Set()
    const sMapData = Object.fromEntries(mapData)
    Array.from(mySet)
  return (
    <Counter data={data} mapData={sMapData} />
  )
}
