import { createFileRoute, Link } from "@tanstack/react-router";
import { media, contact } from "@/lib/media";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing | Ndlovu and Son Kitchens" },
      {
        name: "description",
        content:
          "Site consultation from R450, custom kitchen units and TV stands priced on design. Measured, built and installed by our own team.",
      },
      { property: "og:title", content: "Services & Pricing | Ndlovu and Son Kitchens" },
      {
        property: "og:description",
        content:
          "Consultations from R450, custom kitchens and media walls quoted off real measurements.",
      },
      { property: "og:image", content: media.kitchenIsland },
      { name: "twitter:image", content: media.kitchenIsland },
    ],
  }),
  component: ServicesPage,
});

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

const steps = [
  ["01", "Call-out", "We visit, measure the space and listen to how you use it."],
  ["02", "Design & quote", "A layout and finish schedule with a firm price off real measurements."],
  ["03", "Build", "Cutting, edging and assembly in the workshop."],
  ["04", "Install", "Fitted, levelled and finished by the same hands that built it."],
];

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:pt-28">
        <p className="eyebrow">Services</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          How a project begins
        </h1>
        <p className="mt-8 max-w-xl leading-relaxed font-light text-muted-foreground">
          Book a call-out, we quote off real measurements — no guesswork, no
          surprise costs later.
        </p>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid gap-px bg-border sm:grid-cols-3">
            {items.map((s) => (
              <article key={s.title} className="bg-background p-8 lg:p-10">
                <p className="font-display text-3xl text-primary">{s.price}</p>
                <h2 className="mt-5 font-display text-2xl">{s.title}</h2>
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

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">
          <figure>
            <img
              src={media.kitchenIsland}
              alt="Waterfall stone island in a completed custom kitchen"
              className="w-full object-cover lg:h-[36rem]"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col justify-center">
            <p className="eyebrow">The process</p>
            <ol className="mt-10 space-y-8">
              {steps.map(([n, t, c]) => (
                <li key={n} className="flex gap-6">
                  <span className="font-display text-3xl text-primary/50">{n}</span>
                  <div>
                    <h3 className="font-display text-2xl">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed font-light text-muted-foreground">
                      {c}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="mt-12 inline-block self-start bg-primary px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
