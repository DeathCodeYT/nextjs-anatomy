import { NextResponse } from "next/server"


export default function proxy(request){
    // const token = request.cookies.get('token')
    // if(!token){
    //     return NextResponse.rewrite(new URL("/login",request.url))
    // }
    const response = NextResponse.next()
    response.headers.set('x-app-version','1.0')
    response.cookies.set('x-app-version','1.0')
    console.log(request.method,request.nextUrl.pathname)
    return response
}

export const config = {
    matcher:[
        "/dashboard","/dashboard/:path"
    ]
}
