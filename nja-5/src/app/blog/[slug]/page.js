import { notFound } from 'next/navigation'
import React from 'react'
const posts = {
    "nextjs-anatomy": "Next.js Anatomy Deep Dive",
    "react-hooks": "React Hooks Explained"
}
export default async function Page({ params, searchParams }) {
    const { slug } = await params
    const sp = await searchParams
    // console.log(sp.page);
    const post = posts[slug]
    if(!post){
        notFound()
    }
    return (
        <div>Blog Title: {post}</div>
    )
}

// /product/[category]/[slug]/[t1]/[t2]/[t3]
// /shop/clothes/topes/t-shirts/
// /blog/anything

// url => /blog/[slug]
// params (url path se aate hai)
/*
-> URL path se data lena
-> Folder Structuer se link hote hai
-> SEO Strong
*/

// url => /blog/[slug]?ref=youtube&page=2
// searchParams 
/*
-> Query String se aate hai
-> Optional
-> Filters, Tracking, UI state k liye
*/