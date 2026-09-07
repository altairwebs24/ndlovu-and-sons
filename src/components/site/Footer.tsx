import { Link } from "@tanstack/react-router";
import { contact } from "@/lib/media";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-3">
        <div>
          <span className="font-display text-xl tracking-[0.18em] uppercase">
            Ndlovu <span className="text-primary">&</span> Son
          </span>
          <p className="mt-4 max-w-xs text-sm leading-relaxed font-light text-muted-foreground">
            Handcrafted kitchens, cupboards and media walls, built and fitted by
            our own team across South Africa.
          </p>
        </div>
        <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
          <p className="text-primary">Pages</p>
          <ul className="mt-4 space-y-3">
            <li><Link to="/" className="hover:text-primary">Home</Link></li>
            <li><Link to="/work" className="hover:text-primary">Work</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/about" className="hover:text-primary">Studio</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div className="text-xs tracking-[0.24em] uppercase text-muted-foreground">
          <p className="text-primary">Get in touch</p>
          <ul className="mt-4 space-y-3">
            <li><a href={contact.phoneHref} className="hover:text-primary">{contact.phone}</a></li>
            <li><a href={contact.whatsapp} target="_blank" rel="noreferrer" className="hover:text-primary">WhatsApp</a></li>
            <li><a href={contact.site} target="_blank" rel="noreferrer" className="hover:text-primary">Book a consultation</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-[0.6rem] tracking-[0.24em] uppercase text-muted-foreground sm:flex-row">
          <span>Ndlovu &amp; Son Kitchens</span>
          <span>Custom kitchen carpentry · South Africa</span>
        </div>
      </div>
    </footer>
  );
}
