import { NextResponse } from "next/server";


export async function POST(request,context) {
    // console.log(request)
    // console.log(request.url)
    // console.log(request.nextUrl.searchParams.get('page'))
    console.log((await context.params).id)
    return NextResponse.json({ success: true })
}
