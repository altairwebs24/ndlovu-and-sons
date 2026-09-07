import { createFileRoute } from "@tanstack/react-router";
import { media, contact } from "@/lib/media";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Ndlovu and Son Kitchens" },
      {
        name: "description",
        content:
          "Call +27 64 983 1079 or message us on WhatsApp to book a site consultation for your custom kitchen.",
      },
      { property: "og:title", content: "Contact | Ndlovu and Son Kitchens" },
      {
        property: "og:description",
        content:
          "Tell us about your space and we'll come and measure it. Consultations from R450.",
      },
      { property: "og:image", content: media.kitchenCharcoal },
      { name: "twitter:image", content: media.kitchenCharcoal },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:py-28">
        <p className="eyebrow">Let's talk</p>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight sm:text-6xl">
          Tell us about your space and we'll come and measure it.
        </h1>
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
      </section>

      <section className="border-t border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-px bg-border px-0 sm:grid-cols-3">
          {[
            ["Call", contact.phone, contact.phoneHref],
            ["WhatsApp", "Message us anytime", contact.whatsapp],
            ["Consultation", "R 450 call-out", contact.site],
          ].map(([label, value, href]) => (
            <a
              key={label}
              href={href}
              className="bg-background p-10 transition-colors hover:bg-card"
            >
              <span className="text-[0.6rem] tracking-[0.35em] uppercase text-primary">
                {label}
              </span>
              <p className="mt-4 font-display text-2xl">{value}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="relative border-t border-border">
        <img
          src={media.kitchenCharcoal}
          alt="Charcoal kitchen with backlit oak display cabinets"
          className="h-[24rem] w-full object-cover sm:h-[32rem]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </section>
    </>
  );
}
