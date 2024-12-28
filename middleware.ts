import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

const { user } = useUser();
export default clerkMiddleware((auth, req: NextRequest) => {
	if (isProtectedRoute(req)) {
		auth.protect();

		if (user?.username !== process.env.CLERK_USERNAME_SIGN_IN_ID) {
			return NextResponse.redirect("/unauthorized");
		}
	}

	return NextResponse.next();
});

export const config = {
	matcher: [
		"/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
		"/(api|trpc)(.*)",
	],
};
