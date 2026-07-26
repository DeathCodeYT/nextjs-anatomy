"use client"
import React from 'react'

export default function Counter({ data,mapData }) {
    const handleClick = () => {
        console.log("Clicked")
    }
    console.log(mapData)
    // const date = new Date(data.date)
    return (
        <div className='text-4xl flex items-center justify-center'>
            <h1 onClick={handleClick}>{data.title}</h1>
        </div>
    )
}
