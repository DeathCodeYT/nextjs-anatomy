"use client"
import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className="flex items-center justify-center min-h-[300px] bg-[#121212] rounded-3xl p-8 border border-[#333333] shadow-2xl">
            <div className="text-center">

                {/* Label */}
                <p className="text-[#9aa0a6] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                    Interactive Counter
                </p>

                {/* Count Display */}
                <div className="mb-8">
                    <h1 className={`text-7xl font-bold transition-all duration-300 ${count >= 0 ? 'text-[#8ab4f8]' : 'text-[#f28b82]'}`}>
                        {count}
                    </h1>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-4 bg-[#1e1e1e] p-2 rounded-2xl border border-[#3c4043] shadow-inner">

                    {/* Decrease Button */}
                    <button
                        onClick={() => setCount(count - 1)}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#2d2e30] text-[#e8eaed] hover:bg-[#3c4043] active:scale-90 transition-all border border-[#3c4043]"
                    >
                        <span className="text-2xl font-light">−</span>
                    </button>

                    {/* Reset Button */}
                    <button
                        onClick={() => setCount(0)}
                        className="px-6 py-2 text-xs font-semibold text-[#9aa0a6] hover:text-[#8ab4f8] transition-colors uppercase tracking-wider"
                    >
                        Reset
                    </button>

                    {/* Increase Button */}
                    <button
                        onClick={() => setCount(count + 1)}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#8ab4f8] text-[#1e1e1e] hover:bg-[#aecbfa] active:scale-90 transition-all shadow-[0_0_15px_rgba(138,180,248,0.3)]"
                    >
                        <span className="text-2xl font-light">+</span>
                    </button>

                </div>

                {/* Status Hint */}
                <p className="mt-6 text-[10px] text-[#5f6368]">
                    Click buttons to update the state
                </p>
            </div>
        </div>
    )
}
