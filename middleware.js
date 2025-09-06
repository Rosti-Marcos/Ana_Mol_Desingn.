import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const user = req.cookies.get("user"); // ejemplo con cookie
  const path = req.nextUrl.pathname;

  if (!user) {
    // Redirigir al login si no hay usuario
    if (path !== "/login") return NextResponse.redirect("/login");
  } else {
    const parsedUser = JSON.parse(user || "{}");
    // Solo admin puede acceder a /admin
    if (path.startsWith("/admin") && parsedUser.rol !== "admin") {
      return NextResponse.redirect("/");
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/productos/:path*", "/carrito/:path*"]
};
