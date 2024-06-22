import NextAuth from "next-auth";
import { NextResponse } from "next/server";
import { authConfig } from "./auth.config";
import { PUBLIC_ROUTES, LOGIN, ROOT, SUBROUTES } from "./lib/routes";

const { auth } = NextAuth(authConfig)

export async function middleware(req) {
    const { nextUrl } = req
    const session = await auth()
    console.log("session -->", session)
    console.log("middleware")

    const isAuthenticated = !!session?.user
    console.log("pathname --------?", isAuthenticated, nextUrl.pathname)

    const isPublicRoute = ((PUBLIC_ROUTES.find(route => nextUrl.pathname.startsWith(route))
        || nextUrl.pathname === ROOT) 
        && !SUBROUTES.find(route => nextUrl.pathname.includes(route)))

    console.log(isPublicRoute)

    if (!isAuthenticated && !isPublicRoute) {
        return NextResponse.redirect(new URL(LOGIN, nextUrl))
    }
}

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}