import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "English with Mihaela — Business English Tutoring" },
      { name: "description", content: "One-to-one Business English tutoring for professionals. Workplace communication, interviews, emails and meetings — tailored to your career goals." },
      { name: "author", content: "Mihaela Harieva Shishmanova" },
      { property: "og:title", content: "English with Mihaela — Business English Tutoring" },
      { property: "og:description", content: "One-to-one Business English tutoring for professionals. Workplace communication, interviews, emails and meetings — tailored to your career goals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "English with Mihaela — Business English Tutoring" },
      { name: "twitter:description", content: "One-to-one Business English tutoring for professionals. Workplace communication, interviews, emails and meetings — tailored to your career goals." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64bc6482-5270-48e4-a9f4-c35089398703/id-preview-c3ae8d8d--4eb7ba46-2a9e-413e-9c3c-bb25d589eed9.lovable.app-1781457445794.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64bc6482-5270-48e4-a9f4-c35089398703/id-preview-c3ae8d8d--4eb7ba46-2a9e-413e-9c3c-bb25d589eed9.lovable.app-1781457445794.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteShell />
    </QueryClientProvider>
  );
}

function SiteShell() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/lessons", label: "Lessons" },
    { to: "/contact", label: "Contact" },
  ] as const;
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 backdrop-blur-md bg-background/80">
      <div className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-2 group">
          <span className="font-serif text-2xl leading-none tracking-tight">English</span>
          <span className="eyebrow text-[0.6rem] text-accent">with Mihaela</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/85 transition-colors"
          >
            Book a trial
          </Link>
        </nav>
        <Link
          to="/contact"
          className="md:hidden inline-flex items-center justify-center rounded-full bg-foreground text-background px-3 py-1.5 text-xs font-medium"
        >
          Book
        </Link>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-12 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <p className="font-serif text-3xl leading-none">English with Mihaela</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Professional Business English tutoring, delivered one-to-one over Google Meet.
          </p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Navigate</p>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:text-accent">About Mihaela</Link></li>
            <li><Link to="/lessons" className="hover:text-accent">Lesson programmes</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact &amp; trial lesson</Link></li>
          </ul>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3">Credentials</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>120-hr Premier TEFL</li>
            <li>30-hr Teaching Business English</li>
            <li>BSc International Business (English)</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mihaela Harieva Shishmanova. All rights reserved.</p>
          <p>Worldwide online</p>
        </div>
      </div>
    </footer>
  );
}
