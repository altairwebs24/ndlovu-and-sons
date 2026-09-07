import { createFileRoute, Link } from "@tanstack/react-router";
import { media, contact } from "@/lib/media";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work | Ndlovu and Son Kitchens" },
      {
        name: "description",
        content:
          "Bespoke kitchens, fluted islands, charcoal cabinetry and slatted TV walls handcrafted and installed by Ndlovu and Son Kitchens.",
      },
      { property: "og:title", content: "Our Work | Ndlovu and Son Kitchens" },
      {
        property: "og:description",
        content:
          "A selection of kitchens and joinery built and fitted by our own team.",
      },
      { property: "og:image", content: media.kitchenWalnut },
      { name: "twitter:image", content: media.kitchenWalnut },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-4 lg:pt-28">
        <p className="eyebrow">Selected work</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          Rooms we measured, made and fitted
        </h1>
      </section>

      <section>
        <div className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
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
              <h2 className="mt-4 font-display text-4xl leading-tight">
                Walnut &amp; ivory peninsula
              </h2>
              <p className="mt-6 leading-relaxed font-light text-muted-foreground">
                A tall ivory bank of units set against warm walnut uppers,
                wrapped around a fluted peninsula. The stone top runs unbroken
                over the sink so the whole run reads as one piece.
              </p>
              <p className="mt-6 text-xs tracking-[0.24em] uppercase text-muted-foreground">
                Fluted timber · Veined stone · Concealed lighting
              </p>
            </div>
          </div>

          <div className="mt-24 grid items-center gap-10 lg:grid-cols-12">
            <div className="order-2 lg:order-1 lg:col-span-5">
              <span className="font-display text-5xl text-primary/40">02</span>
              <h2 className="mt-4 font-display text-4xl leading-tight">
                The island, done properly
              </h2>
              <p className="mt-6 leading-relaxed font-light text-muted-foreground">
                A waterfall island in veined stone with the hob set into the
                top, brushed handles and a full appliance tower behind it.
                Everything lines up because everything was measured on site.
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
              <h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">
                Matte charcoal, backlit oak
              </h2>
              <p className="mt-5 max-w-xl leading-relaxed font-light text-muted-foreground">
                Deep matte cabinetry against warm oak glass boxes, lit from
                within. A speckled stone bar wraps the working side of the
                kitchen away from the room.
              </p>
            </div>
          </div>

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
              <h2 className="mt-4 font-display text-4xl leading-tight">
                Beyond the kitchen
              </h2>
              <p className="mt-6 leading-relaxed font-light text-muted-foreground">
                The same joinery goes into living rooms and bedrooms — slatted
                TV walls with hidden cable runs, gloss display cabinets, LED
                plinths and floor-to-ceiling wardrobes.
              </p>
              <div className="hairline mt-10" />
              <p className="mt-6 text-xs tracking-[0.24em] uppercase text-muted-foreground">
                TV walls · Wardrobes · Vanities · Shopfitting
              </p>
            </div>
          </div>
        </div>
      </section>

      <Motion />

      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-3xl sm:text-4xl">
            Want something like this in your home?
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block bg-primary px-8 py-4 text-[0.68rem] tracking-[0.3em] uppercase text-primary-foreground transition-opacity hover:opacity-90"
          >
            Book a call-out
          </Link>
        </div>
      </section>
    </>
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
