import React from 'react'

export default async function Page() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: { revalidate: 60 }
    })
    const posts = await res.json()
    return (
        <div className="min-h-screen bg-[#0f0f0f] py-10 px-4">
            {/* Container */}
            <div className="max-w-3xl mx-auto space-y-6">

                {/* Header Section */}
                <div className="mb-10 text-center">
                    <h1 className="text-3xl font-bold text-[#e8eaed] tracking-tight">Community Posts</h1>
                    <p className="text-[#9aa0a6] text-sm mt-2 font-medium uppercase tracking-widest">Feed Update: 2026</p>
                </div>

                {/* Loop through Posts */}
                {posts?.map((post) => (
                    <div
                        key={post.id}
                        className="group relative bg-[#1e1e1e] border border-[#333333] rounded-2xl p-6 transition-all duration-300 hover:bg-[#252525] hover:border-[#444444] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                    >
                        {/* Top Meta Info */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <span className="w-8 h-8 rounded-full bg-linear-to-tr from-[#8ab4f8] to-[#4285f4] flex items-center justify-center text-[10px] font-bold text-white shadow-sm">
                                    U{post.userId}
                                </span>
                                <span className="text-xs font-semibold text-[#9aa0a6] tracking-wide">
                                    USER_{post.userId}
                                </span>
                            </div>
                            <span className="text-[10px] font-mono text-[#5f6368] bg-[#121212] px-2 py-1 rounded border border-[#333333]">
                                #{post.id}
                            </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-[#e8eaed] mb-3 leading-snug group-hover:text-[#8ab4f8] transition-colors duration-200 first-letter:uppercase">
                            {post.title}
                        </h2>

                        {/* Description/Body */}
                        <p className="text-[#bdc1c6] text-sm leading-relaxed line-clamp-3 font-light mb-6">
                            {post.body}
                        </p>

                        {/* Interaction Footer */}
                        <div className="flex items-center gap-4 pt-4 border-t border-[#2d2d2d]">
                            <button className="flex items-center gap-1.5 text-[#9aa0a6] hover:text-[#8ab4f8] text-xs font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                Like
                            </button>
                            <button className="flex items-center gap-1.5 text-[#9aa0a6] hover:text-white text-xs font-medium transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Comment
                            </button>
                        </div>

                        {/* Subtle Gradient Glow on Hover */}
                        <div className="absolute inset-0 rounded-2xl bg-linear-to-b from-[#8ab4f8]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </div>
                ))}
            </div>
        </div>
    )
}
