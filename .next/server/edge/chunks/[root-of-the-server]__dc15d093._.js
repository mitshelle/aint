(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/[root-of-the-server]__dc15d093._.js", {

"[externals]/node:buffer [external] (node:buffer, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[project]/src/middleware.ts [middleware-edge] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "config": (()=>config),
    "middleware": (()=>middleware),
    "updateSession": (()=>updateSession)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@15.3.4_react-dom@19.1.0_react@19.1.0__react@19.1.0/node_modules/next/dist/esm/server/web/spec-extension/response.js [middleware-edge] (ecmascript)");
;
async function middleware(request) {
    return await updateSession(request);
}
const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"
    ]
};
async function updateSession(request) {
    let supabaseResponse = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$3$2e$4_react$2d$dom$40$19$2e$1$2e$0_react$40$19$2e$1$2e$0_$5f$react$40$19$2e$1$2e$0$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$response$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next({
        request
    });
    console.log("middleware ran");
//   const supabase = createServerClient(
//     process.env.SUPABASE_URL!,
//     process.env.SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value),
//           );
//           supabaseResponse = NextResponse.next({
//             request,
//           });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             supabaseResponse.cookies.set(name, value, options),
//           );
//         },
//       },
//     },
//   );
//   const isAuthRoute =
//     request.nextUrl.pathname === "/login" ||
//     request.nextUrl.pathname === "/sign-up";
//   if (isAuthRoute) {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (user) {
//       return NextResponse.redirect(
//         new URL("/", process.env.NEXT_PUBLIC_BASE_URL),
//       );
//     }
//   }
//   const { searchParams, pathname } = new URL(request.url);
//   if (!searchParams.get("noteId") && pathname === "/") {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();
//     if (user) {
//       const { newestNoteId } = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetch-newest-note?userId=${user.id}`,
//       ).then((res) => res.json());
//       if (newestNoteId) {
//         const url = request.nextUrl.clone();
//         url.searchParams.set("noteId", newestNoteId);
//         return NextResponse.redirect(url);
//       } else {
//         const { noteId } = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL}/api/create-new-note?userId=${user.id}`,
//           {
//             method: "POST",
//             headers: {
//               "Content-Type": "application/json",
//             },
//           },
//         ).then((res) => res.json());
//         const url = request.nextUrl.clone();
//         url.searchParams.set("noteId", noteId);
//         return NextResponse.redirect(url);
//       }
//     }
//   }
//   return supabaseResponse;
}
}}),
}]);

//# sourceMappingURL=%5Broot-of-the-server%5D__dc15d093._.js.map