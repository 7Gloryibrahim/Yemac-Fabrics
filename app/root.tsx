import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "swiper/css";
import type { Route } from "./+types/root";
import "./app.css";
 

export const meta: Route.MetaFunction = () => [
  { title: "Yemac-Fabrics | For Exclusive Asoebi & Bridal Fabrics Gbagada, Lagos" },
  { name: "description", content: "For your exclusive Asoebi Fabrics, Bridal Fabrics, Ready to wear, Cut & Sew, Fashion Designing and Styling, shop at Yemac Fabrics, Gbagada, Lagos" },
{ property: "og:type", content: "website" },
  { property: "og:title", content: "Yemac Fabrics | Exclusive Asoebi & Bridal Fabrics" },
  { property: "og:description", content: "Premium bridal fabrics, Asoebi, ready-to-wear, and custom fashion styling in Gbagada, Lagos." },
  
  // PASTE YOUR REAL LINKS HERE:
  { property: "og:url", content: "https://yemac-fabrics.vercel.app/" },
  { property: "og:image", content: "https://yemac-fabrics.vercel.app/Ankara1.webp" },
  // 3. Twitter Card Tags (For X)
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Yemac Fabrics | Exclusive Asoebi & Bridal Fabrics" },
  { name: "twitter:description", content: "Premium bridal fabrics, Asoebi, and tailoring in Gbagada, Lagos." },
{ name: "twitter:image", content: "https://yemac-fabrics.vercel.app/Ankara1.webp" },
];

export const links: Route.LinksFunction = () => [
 { 
  rel: "icon",
  type: "image/png",
  href: "/Yemac-Icon.png"
 },
  
  
  {
    rel: "stylesheet",
    href:" https://fonts.googleapis.com/css2?family=Milonga&family=Playwrite+US+Trad:wght@100..400&display=swap"
  }
  
    
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return(
  <main> 
  <Outlet />
  </main>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
