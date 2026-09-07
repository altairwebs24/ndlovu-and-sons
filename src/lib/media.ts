const BASE =
  "https://znihwwojmnwukqyilfso.supabase.co/storage/v1/object/public/media";

export const media = {
  teamHero: `${BASE}/team-hero.jpg`,
  kitchenWalnut: `${BASE}/kitchen-walnut.jpg`,
  kitchenIsland: `${BASE}/kitchen-island.jpg`,
  tvUnit: `${BASE}/tv-unit.jpg`,
  kitchenCharcoal: `${BASE}/kitchen-charcoal.jpg`,
  craftsman: `${BASE}/craftsman.jpg`,
  reels: [
    { src: `${BASE}/reel-1.mp4`, poster: `${BASE}/reel-1-poster.jpg` },
    { src: `${BASE}/reel-2.mp4`, poster: `${BASE}/reel-2-poster.jpg` },
    { src: `${BASE}/reel-3.mp4`, poster: `${BASE}/reel-3-poster.jpg` },
  ],
};

export const contact = {
  name: "Ndlovu and Son Kitchens",
  phone: "+27 64 983 1079",
  phoneHref: "tel:+27649831079",
  whatsapp: "https://wa.me/27649831079",
  site: "https://www.ndlovuandsonkitchens.com",
};
