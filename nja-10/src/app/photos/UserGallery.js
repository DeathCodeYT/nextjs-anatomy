import React from 'react'

export default async function UserGallery() {
    await new Promise((resolve) => setTimeout(resolve, 3000))
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
                <div
                    key={user.id}
                    className="group relative bg-slate-900/40 border border-slate-800 p-6 rounded-3xl hover:bg-slate-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1"
                >
                    {/* Avatar & Name */}
                    <div className="flex items-center space-x-4 mb-6">
                        <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-xl font-bold text-white shadow-lg shadow-indigo-500/20">
                            {user.name.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                                {user.name}
                            </h3>
                            <p className="text-sm text-slate-500">@{user.username}</p>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-3 border-t border-slate-800 pt-5">
                        <div className="flex items-center text-sm text-slate-400">
                            <span className="mr-3 opacity-50">📧</span>
                            {user.email}
                        </div>
                        <div className="flex items-center text-sm text-slate-400">
                            <span className="mr-3 opacity-50">🌐</span>
                            <span className="text-indigo-400/80">{user.website}</span>
                        </div>
                        <div className="flex items-center text-sm text-slate-400">
                            <span className="mr-3 opacity-50">📍</span>
                            {user.address.city}
                        </div>
                        <div className="flex items-center text-sm text-slate-400">
                            <span className="mr-3 opacity-50">🏢</span>
                            <span className="italic">{user.company.name}</span>
                        </div>
                    </div>

                    {/* Background Decorative Element */}
                    <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                        <span className="text-6xl font-black">{user.id}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
