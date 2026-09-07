import { createFileRoute, Link } from "@tanstack/react-router";
import { media } from "@/lib/media";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "The Studio | Ndlovu and Son Kitchens" },
      {
        name: "description",
        content:
          "A small, hands-on family team building custom kitchens and joinery across South Africa — the people who quote your kitchen are the ones who fit it.",
      },
      { property: "og:title", content: "The Studio | Ndlovu and Son Kitchens" },
      {
        property: "og:description",
        content:
          "Meet the family team behind Ndlovu and Son Kitchens, handcrafting kitchens across South Africa.",
      },
      { property: "og:image", content: media.craftsman },
      { name: "twitter:image", content: media.craftsman },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-8 lg:pt-28">
        <p className="eyebrow">The studio</p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
          A family name on every kitchen we hand over
        </h1>
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <figure>
            <img
              src={media.craftsman}
              alt="Ndlovu and Son craftsman inspecting a completed charcoal kitchen"
              className="w-full object-cover lg:h-[36rem]"
              loading="lazy"
            />
          </figure>
          <div className="flex flex-col justify-center">
            <p className="leading-relaxed font-light text-muted-foreground">
              Ndlovu and Son Kitchens is a small, hands-on team. The same people
              who quote your kitchen are the ones cutting, assembling and
              fitting it — which is why the detail holds up.
            </p>
            <p className="mt-5 leading-relaxed font-light text-muted-foreground">
              We work throughout South Africa on new builds, renovations and
              single-room upgrades, using top-grade materials so the kitchen
              looks stunning on handover day and still stands years later.
            </p>
            <div className="hairline mt-10" />
            <dl className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
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

      <section className="relative border-t border-border">
        <img
          src={media.teamHero}
          alt="The Ndlovu and Son Kitchens team in a kitchen they installed"
          className="h-[28rem] w-full object-cover object-[center_20%] sm:h-[36rem]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-8 sm:p-14">
          <h2 className="max-w-2xl font-display text-3xl leading-tight sm:text-5xl">
            The team on the tools
          </h2>
          <Link
            to="/contact"
            className="mt-8 inline-block border border-primary/60 px-8 py-4 text-[0.65rem] tracking-[0.28em] uppercase text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Work with us
          </Link>
        </div>
      </section>
    </>
  );
}
