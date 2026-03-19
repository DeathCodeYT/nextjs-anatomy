
// import { notFound } from 'next/navigation'
import React from 'react'
export const metadata = {
    title:"This is Testing Blog Page",
    description:"This is descripiton for testing blog page"
}
export default async function Page() {
    // await new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("Hello")
    //     },5000)
    // })

    // throw new Error("Ebe ye page abhi bn raha hai")
    // return notFound()
  return (
    <div >Blog Page</div>
  )
}


// app/page.js => /
// app/blog/page.js => /blog

