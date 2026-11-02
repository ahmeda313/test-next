import { NextRequest } from "next/server"

export function GET(){
    return Response.json({
        name:"Ahmed",
        email:"ahmed@email.com"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()

    console.log(body)

    return Response.json({message:"You are logged in"})
}