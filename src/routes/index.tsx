import { createFileRoute } from "@tanstack/react-router";
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
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Intro />
      <Showcase />
      <Services />
      <Motion />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="#top" className="leading-none">
          <span className="block font-display text-xl tracking-[0.18em] uppercase">
            Ndlovu <span className="text-primary">&</span> Son
          </span>
          <span className="mt-1 block text-[0.6rem] tracking-[0.42em] uppercase text-muted-foreground">
            Kitchens
          </span>
        </a>
        <nav className="hidden items-center gap-10 text-xs tracking-[0.24em] uppercase text-muted-foreground md:flex">
          <a href="#work" className="transition-colors hover:text-primary">
            Work
          </a>
          <a href="#services" className="transition-colors hover:text-primary">
            Services
          </a>
          <a href="#team" className="transition-colors hover:text-primary">
            Studio
          </a>
        </nav>
        <a
          href={contact.phoneHref}
          className="border border-primary/60 px-5 py-2.5 text-[0.65rem] tracking-[0.28em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {contact.phone}
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={media.teamHero}
        alt="The Ndlovu and Son Kitchens team standing behind a fluted kitchen island they installed"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-40">
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
          <a
            href="#work"
            className="border border-border px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            View the work
          </a>
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

function Showcase() {
  return (
    <section id="work" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="eyebrow">Selected work</p>

        {/* Feature 1 — image left, words right */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            <img
              src={media.kitchenWalnut}
              alt="Walnut and cream kitchen with a fluted peninsula and marble-effect stone top"
              className="w-full object-cover lg:h-[38rem]"
              loading="lazy"
            />
          </figure>
          <div className="lg:col-span-5 lg:pl-6">
            <span className="font-display text-5xl text-primary/40">01</span>
            <h3 className="mt-4 font-display text-4xl leading-tight">
              Walnut &amp; ivory peninsula
            </h3>
            <p className="mt-6 leading-relaxed font-light text-muted-foreground">
              A tall ivory bank of units set against warm walnut uppers, wrapped
              around a fluted peninsula. The stone top runs unbroken over the
              sink so the whole run reads as one piece.
            </p>
            <p className="mt-6 text-xs tracking-[0.24em] uppercase text-muted-foreground">
              Fluted timber · Veined stone · Concealed lighting
            </p>
          </div>
        </div>

        {/* Feature 2 — words left, image right, offset */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <span className="font-display text-5xl text-primary/40">02</span>
            <h3 className="mt-4 font-display text-4xl leading-tight">
              The island, done properly
            </h3>
            <p className="mt-6 leading-relaxed font-light text-muted-foreground">
              A waterfall island in veined stone with the hob set into the top,
              brushed handles and a full appliance tower behind it. Everything
              lines up because everything was measured on site.
            </p>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block border-b border-primary pb-1 text-xs tracking-[0.28em] uppercase text-primary"
            >
              Ask about this build
            </a>
          </div>
          <figure className="order-1 lg:order-2 lg:col-span-7">
            <img
              src={media.kitchenIsland}
              alt="Grey and white kitchen with a waterfall stone island and integrated hob"
              className="w-full object-cover lg:h-[38rem]"
              loading="lazy"
            />
          </figure>
        </div>

        {/* Feature 3 — full bleed with overlay words */}
        <div className="relative mt-24">
          <img
            src={media.kitchenCharcoal}
            alt="Charcoal U-shaped kitchen with backlit glass uppers and a fluted breakfast bar"
            className="h-[32rem] w-full object-cover sm:h-[42rem]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
            <span className="font-display text-5xl text-primary/50">03</span>
            <h3 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
              Matte charcoal, backlit oak
            </h3>
            <p className="mt-5 max-w-xl leading-relaxed font-light text-muted-foreground">
              Deep matte cabinetry against warm oak glass boxes, lit from within.
              A speckled stone bar wraps the working side of the kitchen away
              from the room.
            </p>
          </div>
        </div>

        {/* Feature 4 — two-up, one wide one narrow */}
        <div className="mt-24 grid gap-10 lg:grid-cols-12">
          <figure className="lg:col-span-6">
            <img
              src={media.tvUnit}
              alt="Gloss and slatted TV wall unit with under-cabinet lighting"
              className="h-full w-full object-cover lg:h-[34rem]"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col justify-center lg:col-span-6">
            <span className="font-display text-5xl text-primary/40">04</span>
            <h3 className="mt-4 font-display text-4xl leading-tight">
              Beyond the kitchen
            </h3>
            <p className="mt-6 leading-relaxed font-light text-muted-foreground">
              The same joinery goes into living rooms and bedrooms — slatted TV
              walls with hidden cable runs, gloss display cabinets, LED plinths
              and floor-to-ceiling wardrobes.
            </p>
            <div className="hairline mt-10" />
            <p className="mt-6 text-xs tracking-[0.24em] uppercase text-muted-foreground">
              TV walls · Wardrobes · Vanities · Shopfitting
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const items = [
    {
      title: "Consultation (call out)",
      price: "R 450",
      copy: "We come to the site, measure, talk through layout and finishes, and leave you with a clear plan.",
    },
    {
      title: "Kitchen units",
      price: "On design",
      copy: "Full custom kitchens — carcasses, doors, islands, stone tops and installation by our own team.",
    },
    {
      title: "TV stands & units",
      price: "On design",
      copy: "Slatted and gloss media walls, floating units, lighting and concealed storage.",
    },
  ];
  return (
    <section id="services" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Services</p>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl">
              How a project begins
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed font-light text-muted-foreground">
            Book a call-out, we quote off real measurements — no guesswork, no
            surprise costs later.
          </p>
        </div>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-3">
          {items.map((s) => (
            <article key={s.title} className="bg-background p-8 lg:p-10">
              <p className="font-display text-3xl text-primary">{s.price}</p>
              <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed font-light text-muted-foreground">
                {s.copy}
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-block border-b border-primary/70 pb-1 text-[0.65rem] tracking-[0.28em] uppercase text-primary"
              >
                Book now
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Motion() {
  const captions = [
    ["On site", "Cutting, edging and fitting — filmed as it happens."],
    ["Handover", "The moment a room turns into a kitchen."],
    ["Detail", "Fluting, lighting and the finish up close."],
  ];
  return (
    <section className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <p className="eyebrow">In motion</p>
        <h2 className="mt-5 max-w-2xl font-display text-4xl sm:text-5xl">
          From workshop floor to finished room
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {media.reels.map((reel, i) => (
            <figure
              key={reel.src}
              className={`group relative overflow-hidden ${
                i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-8" : ""
              }`}
            >
              <video
                src={reel.src}
                poster={reel.poster}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[9/16] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-6">
                <span className="font-display text-5xl leading-none text-primary/70">
                  0{i + 1}
                </span>
                <div className="hairline my-4 w-12" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-primary">
                  {captions[i]?.[0]}
                </span>
                <p className="mt-2 font-display text-2xl leading-snug">
                  {captions[i]?.[1]}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


function Team() {
  return (
    <section id="team" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
        <figure>
          <img
            src={media.craftsman}
            alt="Ndlovu and Son craftsman inspecting a completed charcoal kitchen"
            className="w-full object-cover lg:h-[36rem]"
            loading="lazy"
          />
        </figure>
        <div className="flex flex-col justify-center">
          <p className="eyebrow">The studio</p>
          <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
            A family name on every kitchen we hand over
          </h2>
          <p className="mt-8 leading-relaxed font-light text-muted-foreground">
            Ndlovu and Son Kitchens is a small, hands-on team. The same people
            who quote your kitchen are the ones cutting, assembling and fitting
            it — which is why the detail holds up.
          </p>
          <p className="mt-5 leading-relaxed font-light text-muted-foreground">
            We work throughout South Africa on new builds, renovations and
            single-room upgrades.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
        <p className="eyebrow">Let's talk</p>
        <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Tell us about your space and we'll come and measure it.
        </h2>
        <a
          href={contact.phoneHref}
          className="mt-10 inline-block font-display text-3xl text-primary sm:text-4xl"
        >
          {contact.phone}
        </a>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-primary px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            WhatsApp us
          </a>
          <a
            href={contact.site}
            target="_blank"
            rel="noreferrer"
            className="border border-border px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase transition-colors hover:border-primary hover:text-primary"
          >
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-10 text-xs tracking-[0.2em] uppercase text-muted-foreground sm:flex-row">
        <span>Ndlovu &amp; Son Kitchens</span>
        <span>Custom kitchen carpentry · South Africa</span>
      </div>
    </footer>
  );
}
