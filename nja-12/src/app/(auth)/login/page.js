"use client"
import Image from 'next/image'
import React from 'react'

const myCustomCdnLoader = ({ src, width, quality }) => {
  return `https://cdn.my-website.com/${src}?w=${width}&q=${quality || 75}`
}

export default function Page() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center p-4">
      asdfasd
      fa
      sdf
      asd
      fa
      sdf
      asd
      
      <Image width={800} loader={myCustomCdnLoader}  height={500} className='' src='/spiderman.jpg' alt="spiderman"/>

    </div>
  )
}
