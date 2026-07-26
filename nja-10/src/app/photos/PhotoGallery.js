import { revalidateTag } from 'next/cache'
import React from 'react'

export default async function PhotoGallery() {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const res = await fetch('https://jsonplaceholder.typicode.com/photos', { next :{
        tags:['comments','blo-{bogid}']
    }})
    const photos = await res.json()
    revalidateTag('comments')
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {photos.slice(0, 4).map((photo) => (
                <div
                    key={photo.id}
                    className="group relative flex flex-col bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]"
                >
                    {/* Image Container */}
                    <div className="relative aspect-square overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10 opacity-60"></div>
                        <img
                            src={photo.url}
                            alt={photo.title}
                            className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                        />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="px-3 py-1 text-xs font-bold bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-400 rounded-full">
                                #{photo.id}
                            </span>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 relative">
                        <h3 className="text-slate-200 font-semibold leading-relaxed line-clamp-2 group-hover:text-cyan-300 transition-colors">
                            {photo.title}
                        </h3>
                        <div className="mt-4 flex items-center justify-between">
                            <button className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-cyan-400 transition-colors">
                                View Details →
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
