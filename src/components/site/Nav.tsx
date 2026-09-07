import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/media";

const links = [
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "Studio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5">
        <Link to="/" className="leading-none">
          <span className="block font-display text-lg tracking-[0.18em] uppercase sm:text-xl">
            Ndlovu <span className="text-primary">&</span> Son
          </span>
          <span className="mt-1 block text-[0.55rem] tracking-[0.42em] uppercase text-muted-foreground">
            Kitchens
          </span>
        </Link>
        <nav className="hidden items-center gap-9 text-xs tracking-[0.24em] uppercase text-muted-foreground md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href={contact.phoneHref}
          className="hidden border border-primary/60 px-5 py-2.5 text-[0.65rem] tracking-[0.28em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:block"
        >
          {contact.phone}
        </a>
      </div>
      <nav className="flex items-center justify-center gap-6 border-t border-border/60 px-6 py-3 text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground md:hidden">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeProps={{ className: "text-primary" }}
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
