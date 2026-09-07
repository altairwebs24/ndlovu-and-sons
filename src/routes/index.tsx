import { createFileRoute, Link } from "@tanstack/react-router";
import { media, contact } from "@/lib/media";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ndlovu and Son Kitchens | Bespoke Kitchens & Carpentry" },
      {
        name: "description",
        content:
          "Custom kitchens, built-in cupboards and TV units, handcrafted with precision. Consultations from R450. Call +27 64 983 1079.",
      },
      {
        property: "og:title",
        content: "Ndlovu and Son Kitchens | Bespoke Kitchens & Carpentry",
      },
      {
        property: "og:description",
        content:
          "Handcrafted kitchens built to last. Custom units, cupboards and TV walls across South Africa.",
      },
      { property: "og:image", content: media.teamHero },
      { name: "twitter:image", content: media.teamHero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Preview />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <img
        src={media.teamHero}
        alt="The Ndlovu and Son Kitchens team standing behind a fluted kitchen island they installed"
        className="absolute inset-0 h-full w-full object-contain md:object-cover md:object-[center_20%]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="relative mx-auto flex min-h-[82svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32">
        <p className="eyebrow rise">Est. in craftsmanship — South Africa</p>
        <h1 className="rise mt-6 max-w-4xl font-display text-5xl leading-[1.03] sm:text-7xl lg:text-8xl">
          Kitchens built by hand,
          <span className="block italic text-primary">made to be lived in.</span>
        </h1>
        <p className="rise mt-8 max-w-xl text-base leading-relaxed font-light text-muted-foreground">
          A studio specialising in modern, custom kitchen carpentry — cabinetry,
          fluted islands, cupboards and TV walls, cut and finished to your space.
        </p>
        <div className="rise mt-10 flex flex-wrap gap-4">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start your kitchen
          </a>
          <Link
            to="/work"
            className="border border-border px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            View the work
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
      <div className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow">Crafting excellence</p>
          <div className="hairline mt-6 max-w-24" />
        </div>
        <div className="lg:col-span-7">
          <h2 className="font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
            We build high-quality, handcrafted kitchens that meet each client's
            taste — and the way they actually cook.
          </h2>
          <p className="mt-8 max-w-2xl leading-relaxed font-light text-muted-foreground">
            With years on site behind us, we take pride in the detail: level
            carcasses, honest joinery, soft-close hardware and stone tops set
            true. Our team works with top-grade materials so the kitchen looks
            stunning on handover day and still stands years later.
          </p>
          <dl className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3">
            {[
              ["Custom", "Every unit made to measure"],
              ["Installed", "Fitted by our own team"],
              ["Guaranteed", "Materials chosen to last"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="font-display text-2xl text-primary">{k}</dt>
                <dd className="mt-2 text-sm font-light text-muted-foreground">
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

function Preview() {
  const cards = [
    {
      to: "/work" as const,
      img: media.kitchenWalnut,
      alt: "Walnut and ivory kitchen with a fluted peninsula",
      eyebrow: "Selected work",
      title: "Kitchens we have handed over",
    },
    {
      to: "/services" as const,
      img: media.tvUnit,
      alt: "Slatted TV wall unit with concealed lighting",
      eyebrow: "Services",
      title: "How a project begins",
    },
    {
      to: "/about" as const,
      img: media.craftsman,
      alt: "Ndlovu and Son craftsman inspecting a finished kitchen",
      eyebrow: "The studio",
      title: "The people behind the work",
    },
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="eyebrow">Explore</p>
        <div className="mt-12 grid gap-px bg-border sm:grid-cols-3">
          {cards.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              className={`group relative block overflow-hidden bg-background ${
                i === 1 ? "sm:mt-0" : ""
              }`}
            >
              <img
                src={c.img}
                alt={c.alt}
                loading="lazy"
                className="h-80 w-full object-cover opacity-80 transition-all duration-[900ms] group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <span className="text-[0.6rem] tracking-[0.35em] uppercase text-primary">
                  {c.eyebrow}
                </span>
                <p className="mt-2 font-display text-2xl leading-snug">
                  {c.title}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
