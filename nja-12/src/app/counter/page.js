import React from 'react'
import Counter from './Counter'

export default function page() {
    if (typeof window !== "undefined") {
        console.log("client")
        return <h1>Client</h1>
    }
    console.log("server")
    return (
        <div>Server Component
            {/* <h1>{window.innerHeight}</h1> */}
        </div>
    )
}
