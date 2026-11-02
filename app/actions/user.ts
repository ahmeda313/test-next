"use server"

export async function getUserDetailsServerAction() {
    // perform db operatins here
    return Response.json({
        name:"Ahmed",
        email:"ahmed@email.com"
    })
}