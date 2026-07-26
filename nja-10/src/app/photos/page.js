import React, { Suspense } from 'react'
import PhotoGallery from './PhotoGallery'
import UserGallery from './UserGallery';

export default function Page() {
    return (
        <div className="min-h-screen bg-[#020617] p-6 md:p-12 text-white selection:bg-cyan-500/30">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col mb-10 space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Streaming Visuals By DeathCode
                    </h2>
                    <p className="text-slate-400 text-lg font-medium">JSONPlaceholder API Integration</p>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
                </div>
                {/* Gallery Section */}
                <Suspense fallback={<SkeletonLoader/>}>
                    <PhotoGallery />
                </Suspense>
            </div>
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col mb-10 space-y-2">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Streaming Visuals By DeathCode
                    </h2>
                    <p className="text-slate-400 text-lg font-medium">JSONPlaceholder API Integration</p>
                    <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
                </div>
                {/* Gallery Section */}
                <Suspense fallback={<UserSkeleton/>}>
                    <UserGallery />
                </Suspense>
            </div>
        </div>
    )
}

function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {[...Array(4)].map((_, i) => (
        <div key={i} className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden animate-pulse">
          <div className="aspect-square bg-slate-800/50"></div>
          <div className="p-6 space-y-4">
            <div className="h-4 w-3/4 bg-slate-800 rounded-lg"></div>
            <div className="h-4 w-1/2 bg-slate-800 rounded-lg"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

function UserSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-slate-900/40 border border-slate-800 p-6 rounded-3xl animate-pulse">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-14 w-14 rounded-2xl bg-slate-800"></div>
            <div className="space-y-2">
              <div className="h-4 w-32 bg-slate-800 rounded"></div>
              <div className="h-3 w-20 bg-slate-800 rounded"></div>
            </div>
          </div>
          <div className="space-y-3 border-t border-slate-800 pt-5">
            <div className="h-3 w-full bg-slate-800 rounded"></div>
            <div className="h-3 w-3/4 bg-slate-800 rounded"></div>
            <div className="h-3 w-1/2 bg-slate-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

