import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request) {
    // console.log(request)
    // console.log(request.url)
    // console.log(request.nextUrl.searchParams.get('page'))
    // console.log(request.headers)
    // const cookieStore = await cookies()
    // console.log(cookieStore.get('token').value)
    // const body = await request.json()
    // const body = await request.text()
    // const formData = await request.formData()
    // console.log(formData.get('channel'))
    // const file = formData.get('image')
    // console.log(file)
    // if(file.size>3*1024*1024){
    //     return NextResponse.json({ success: false,message:"File is too large" })
    // }


    const response =  NextResponse.json({ success: true },{
        status:200,
        headers:{
            "x-version":"1.3.4"
        }
    })
    response.cookies.set('theme','dark')
    return response
    // return NextResponse.redirect(new URL('/login',request.url))
}

