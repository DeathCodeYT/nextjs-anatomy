import { notFound } from 'next/navigation'
import React from 'react'

export default async function Page({ params }) {
    const { slug } = await params
    // console.log(slug)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${Number(slug)}`)
    const post = await res.json()
    if (!post.id) {
        notFound()
    }
    return (
        <div className="min-h-screen bg-[#121212] flex items-center justify-center p-4">
            {/* Main Post Container */}
            <article className="max-w-2xl w-full bg-[#1e1e1e] border border-[#333333] rounded-2xl overflow-hidden shadow-2xl">

                {/* Header Section */}
                <div className="p-8 pb-4">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 bg-[#8ab4f81a] text-[#8ab4f8] text-xs font-bold rounded-full border border-[#8ab4f833] tracking-wider uppercase">
                            Post ID: {post.id}
                        </span>
                        <span className="text-[#9aa0a6] text-sm">•</span>
                        {/* <time className="text-[#9aa0a6] text-sm font-medium">{date}</time> */}
                    </div>

                    {/* Main Title */}
                    <h1 className="text-3xl md:text-4xl font-bold text-[#e8eaed] leading-tight mb-6 tracking-tight">
                        {post.title}
                    </h1>

                    {/* Divider */}
                    <div className="h-[1px] w-full bg-[#333333] mb-8"></div>

                    {/* Content / Description */}
                    <div className="prose prose-invert max-w-none">
                        <p className="text-lg text-[#bdc1c6] leading-[1.8] font-light">
                            {post.body}
                        </p>
                    </div>
                </div>

                {/* Author Footer Section */}
                <div className="bg-[#252525] px-8 py-6 flex items-center justify-between border-t border-[#333333]">
                    <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#8ab4f8] to-[#4285f4] flex items-center justify-center text-white font-bold shadow-md">
                            DC
                        </div>
                        <div>
                            <p className="text-[#e8eaed] font-semibold text-sm">DeathCode</p>
                            <p className="text-[#9aa0a6] text-xs">Full Stack Developer</p>
                        </div>
                    </div>

                    <button className="text-[#8ab4f8] hover:bg-[#8ab4f81a] px-4 py-2 rounded-lg transition-all text-sm font-medium border border-transparent hover:border-[#8ab4f833]">
                        Share Post
                    </button>
                </div>
            </article>
        </div>
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