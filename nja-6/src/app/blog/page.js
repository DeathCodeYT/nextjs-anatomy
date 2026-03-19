import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function Page() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json()

  return <>
    <h1>Server Component</h1>
    <div className='flex flex-wrap gap-4'>

      {posts.map(p => (
        <Link href={`/blog/${p.id}`} key={p.id} class="max-w-md mx-auto my-6 bg-[#1e1e1e] border border-[#333333] rounded-xl p-5 shadow-lg transition-all duration-300 hover:bg-[#252525] hover:border-[#444444] group">

          <div class="flex items-center justify-between mb-3">
            <span class="text-[10px] font-medium tracking-widest text-[#9aa0a6] uppercase bg-[#2d2e30] px-2 py-0.5 rounded border border-[#3c4043]">
              ID: {p.id}
            </span>
            <button class="text-[#9aa0a6] hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>

          <h2 class="text-xl font-semibold text-[#e8eaed] mb-2 leading-tight group-hover:text-[#8ab4f8] transition-colors">
            {p.title}
          </h2>

          <p class="text-sm text-[#bdc1c6] leading-relaxed line-clamp-2">
            {p.body}
          </p>

          <div class="mt-4 pt-4 border-t border-[#333333] flex items-center gap-3">
            <div class="h-8 w-8 rounded-full bg-[#3c4043] flex items-center justify-center text-[#8ab4f8] font-bold text-xs">
              DC
            </div>
            <div class="text-xs">
              <p class="text-[#e8eaed] font-medium">DeathCode</p>
              <p class="text-[#9aa0a6]">Feb 27, 2026</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
}