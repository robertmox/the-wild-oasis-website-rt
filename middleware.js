// import { NextResponse } from "next/server";

// export function middleware(request) {
//   const url = request.nextUrl.clone(); //  this is a URL object
//   url.pathname = "/about"; // change the path only

//   return NextResponse.redirect(url);
// }

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

export const config = {
  matcher: ["/account"],
};
