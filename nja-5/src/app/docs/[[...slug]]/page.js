import React from 'react'

export default async function Page({ params }) {
    const {slug} = await params
    const path = slug ?? []
    console.log(path)
    return (
        <div>breadcrumbs: 
            /docs -&gt; {path.join(" -> ")}
        </div>
    )
}


// /docs/react
// /docs/react/hooks
// /docs/react/hooks/useEffect


