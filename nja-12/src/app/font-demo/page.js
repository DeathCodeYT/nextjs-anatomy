import React from 'react';
import { Inter, Roboto, Poppins } from "next/font/google"

const inter = Inter({
    subsets: ['latin']
})
const poppins = Poppins({
    weight: "400",
    subsets: ['latin']
})


export default function FontDemoDark() {
    return (

        <div className="max-w-4xl mx-auto p-8 space-y-10 bg-slate-950 text-gray-100 min-h-screen rounded-xl shadow-2xl border border-slate-800">

            {/* Heading Section */}
            <header className="border-b border-slate-800 pb-6">
                <h1 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                    Next.js Font Optimization <span className="text-blue-500">Masterclass</span>
                </h1>
                <p className="font-subtitle text-lg text-slate-400 mt-3">
                    Sikhiye kaise zero Cumulative Layout Shift (CLS) ke sath fonts load karein.
                </p>
            </header>

            {/* Body Text Section */}
            <section>
                <h2 className="font-subheading text-2xl font-bold mb-3 text-slate-200">
                    1. Standard Body Typography
                </h2>
                <p className={"text-slate-300 "}>
                    Ye ek normal paragraph hai jisme hum primary body font apply karenge. Next.js
                    mein fonts automatically self-host hote hain, jiska matlab hai ki browsers
                    ko external network requests nahi karni padti. Isse performance aur privacy
                    dono boost hote hain.
                </p>
                <p className={"text-slate-300 " + inter.className}>
                    Ye ek normal paragraph hai jisme hum primary body font apply karenge. Next.js
                    mein fonts automatically self-host hote hain, jiska matlab hai ki browsers
                    ko external network requests nahi karni padti. Isse performance aur privacy
                    dono boost hote hain.
                </p>
                <p className={"text-slate-300 " + poppins.className}>
                    Ye ek normal paragraph hai jisme hum primary body font apply karenge. Next.js
                    mein fonts automatically self-host hote hain, jiska matlab hai ki browsers
                    ko external network requests nahi karni padti. Isse performance aur privacy
                    dono boost hote hain.
                </p>
            </section>

            {/* Blockquote Section */}
            <section>
                <h2 className="font-subheading text-2xl font-bold mb-3 text-slate-200">
                    2. Quotes & Accents
                </h2>
                <blockquote className="font-quote text-lg italic border-l-4 border-blue-500 pl-5 py-4 text-slate-300 bg-slate-900/50 rounded-r-lg shadow-inner">
                    &quot;Good typography is like a good voice—it makes the message clear, engaging,
                    aur sunne wale ko maza aata hai.&quot;
                </blockquote>
            </section>

            {/* Code Section */}
            <section>
                <h2 className="font-subheading text-2xl font-bold mb-3 text-slate-200">
                    3. Developer Fonts (Monospace)
                </h2>
                <p className="font-body text-base mb-4 text-slate-300">
                    Programming tutorials ya code snippets ke liye monospace font zaroori hai:
                </p>

                {/* Fancy Code Block with macOS style dots */}
                <div className="relative rounded-xl bg-[#0d1117] border border-slate-800 shadow-xl overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-slate-800">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        <span className="ml-2 text-xs text-slate-500 font-code">fonts.ts</span>
                    </div>
                    <pre className="font-code text-green-400 p-5 overflow-x-auto text-sm">
                        <code>{`const optimizeFont = () => {
  console.log("Font successfully optimized without layout shift!");
  return true;
};`}</code>
                    </pre>
                </div>
            </section>

            {/* Mixed Fonts Section */}
            <section>
                <h2 className="font-subheading text-2xl font-bold mb-3 text-slate-200">
                    4. Mixed Fonts in Action
                </h2>
                <div className="p-5 bg-slate-900 rounded-lg border border-slate-800">
                    <p className="font-body text-base text-slate-300">
                        Kabhi kabhi humein <span className="font-handwriting text-3xl text-purple-400 px-2">stylish cursive text</span> ko normal text ke beech
                        mein embed karna padta hai highlight karne ke liye.
                    </p>
                </div>
            </section>

        </div>
    );
}

