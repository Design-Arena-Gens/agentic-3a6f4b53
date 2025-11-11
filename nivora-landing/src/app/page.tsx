import Image from "next/image";

const signatureCreations = [
  {
    name: "Champagne Berry Gateau",
    description:
      "Layers of vanilla chiffon brushed with rosé syrup, mascarpone mousse, and fresh berry compote.",
    highlights: ["Serves 12", "Seasonal berries", "Perfect for celebrations"],
  },
  {
    name: "Midnight Cocoa Opera",
    description:
      "Bittersweet chocolate sponge with espresso buttercream and dark ganache, finished with gold leaf.",
    highlights: ["Gluten-friendly", "Hand-painted finish", "Rich but balanced"],
  },
  {
    name: "Citrus Cloud Pavlova",
    description:
      "Crisp meringue crowned with lemon curd, vanilla bean cream, and a bouquet of brûléed citrus.",
    highlights: ["Naturally gluten free", "Light & bright", "Made to order"],
  },
  {
    name: "Hazelnut Praline Torte",
    description:
      "Roasted hazelnut sponge, praline diplomat cream, and caramel shards for the perfect crunch.",
    highlights: ["Customer favorite", "Nougatine crunch", "Pairs with espresso"],
  },
];

const craftPillars = [
  {
    title: "Art by Nia",
    copy: "Cake designer and sugar artist bringing couture finishes, hand-painted florals, and sculpted textures to every tier.",
  },
  {
    title: "Flavor by Orion",
    copy: "Culinary chemist crafting layered flavor profiles with thoughtfully sourced ingredients and seasonal produce.",
  },
  {
    title: "Only Small Batches",
    copy: "We bake to order from our home kitchen, allowing every cake to receive the time and detail it deserves.",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-x-hidden bg-background text-foreground">
      <div className="absolute inset-x-0 -top-20 -z-10 mx-auto h-[520px] w-[90%] max-w-4xl rounded-full bg-accent/30 blur-3xl" />
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-12 sm:px-10 md:px-16 lg:px-20">
        <header className="rounded-3xl border border-white/40 bg-white/80 px-6 py-14 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.45)] backdrop-blur-xl lg:px-16" id="hero">
          <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <span className="inline-flex items-center gap-3 rounded-full border border-foreground/10 bg-highlight px-4 py-1 text-sm font-medium uppercase tracking-[0.35em] text-muted">
                Home bakery artistry
              </span>
              <div className="space-y-4">
                <h1 className="font-serif text-4xl leading-tight sm:text-5xl sm:leading-tight lg:text-6xl">
                  Nivora makes moments sweeter with bespoke cakes crafted by two beating hearts.
                </h1>
                <p className="max-w-xl text-lg text-muted sm:text-xl">
                  Nia sketches each silhouette while Orion layers flavors you will remember long after the candles fade. Every celebration deserves a centerpiece that tastes as beautiful as it looks.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-3 text-base font-semibold text-background transition hover:bg-foreground/90"
                >
                  Reserve your cake
                  <svg
                    className="size-4 transition-transform group-hover:translate-x-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 8H12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.5 3.5L13 8L8.5 12.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <div className="flex items-center gap-3 rounded-full border border-foreground/15 bg-white/70 px-5 py-3 text-sm font-medium text-muted">
                  <span className="inline-flex size-2 rounded-full bg-accent-deep" />
                  Baking in Alexandria, VA
                </div>
              </div>
            </div>
            <div className="relative isolate flex items-center justify-center">
              <div className="absolute -left-12 -top-10 hidden h-32 w-32 rounded-full bg-accent/40 blur-3xl md:block" />
              <div className="absolute -bottom-16 -right-10 hidden h-32 w-32 rounded-full bg-accent-deep/30 blur-3xl md:block" />
              <div className="relative flex flex-col items-center overflow-hidden rounded-3xl border border-foreground/10 bg-white/80 p-8 shadow-[0_25px_80px_-40px_rgba(0,0,0,0.55)]">
                <Image
                  src="/hero-cake.svg"
                  alt="Three-tier buttercream cake decorated with florals"
                  width={380}
                  height={380}
                  className="w-64 sm:w-72"
                  priority
                />
                <div className="mt-6 flex w-full flex-col items-start gap-2 rounded-2xl bg-highlight/60 px-5 py-4 text-sm text-muted">
                  <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">This week&apos;s tasting</p>
                  <p className="font-medium text-foreground">Lavender honey sponge, whipped goat cheese frosting, macerated figs.</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="space-y-10" id="menu">
          <div className="flex flex-col gap-4 text-center sm:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
              Signature menu
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Cakes made to celebrate the way you love.</h2>
              <p className="text-base text-muted sm:max-w-xs">
                Customize flavors, finishes, and sizing. Every cake is hand-delivered within the DMV metro area.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {signatureCreations.map((cake) => (
              <article
                key={cake.name}
                className="group flex h-full flex-col justify-between rounded-3xl border border-foreground/10 bg-white/80 p-8 backdrop-blur">
                <div className="space-y-4">
                  <h3 className="font-serif text-2xl text-foreground group-hover:text-accent-deep">
                    {cake.name}
                  </h3>
                  <p className="text-base text-muted">{cake.description}</p>
                </div>
                <ul className="mt-6 flex flex-wrap gap-3 text-sm text-foreground/70">
                  {cake.highlights.map((detail) => (
                    <li
                      key={detail}
                      className="rounded-full bg-highlight px-4 py-2"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-foreground/10 bg-white/70 px-6 py-14 backdrop-blur md:px-12" id="about">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">Meet the duo</p>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">A partnership of artistry and flavor.</h2>
              <p className="text-base text-muted">
                Married and baking since 2016, Nia and Orion turn their home kitchen into a studio of edible memories. Together they balance whimsical design with considered flavor journeys, weaving memories from your story into every layer.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {craftPillars.map((pillar) => (
                  <div key={pillar.title} className="rounded-2xl bg-highlight/70 p-5">
                    <h3 className="font-serif text-xl text-foreground">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-muted">{pillar.copy}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex flex-col gap-6 rounded-3xl border border-dashed border-accent/50 bg-background px-8 py-10">
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-foreground/10 bg-white px-4 py-3 text-lg font-semibold text-accent-deep">
                  Nia
                </div>
                <p className="text-sm text-muted">
                  Pâtisserie-trained cake artist focused on sculptural buttercream techniques, sugar flowers, and modern silhouettes inspired by fashion houses.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="rounded-full border border-foreground/10 bg-white px-4 py-3 text-lg font-semibold text-accent-deep">
                  Orion
                </div>
                <p className="text-sm text-muted">
                  Flavor-obsessed culinary chemist crafting layered profiles using house-made curds, coulis, and infusions from their garden.
                </p>
              </div>
              <div className="rounded-2xl bg-highlight px-6 py-5 text-sm text-muted">
                <p className="font-semibold uppercase tracking-[0.25em] text-foreground/60">
                  Our promise
                </p>
                <p className="mt-3 text-base text-foreground">
                  One cake per day, tasted together the night before, delivered with handwritten serving notes.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-foreground/10 bg-foreground text-background" id="contact">
          <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-background/70">
                Contact to order
              </p>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
                Share your date and vision—Nia &amp; Orion will craft a tasting journey just for you.
              </h2>
              <p className="text-base text-background/70">
                We recommend booking 4-6 weeks in advance. Minimum order $160. Delivery available within 25 miles of Alexandria, or pick up by appointment.
              </p>
              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href="tel:+17035551234"
                  className="inline-flex items-center gap-3 rounded-full bg-background px-6 py-3 text-foreground transition hover:bg-accent"
                >
                  <PhoneIcon />
                  Call Nivora
                </a>
                <a
                  href="mailto:hello@nivorabakes.com?subject=Nivora%20Cake%20Inquiry"
                  className="inline-flex items-center gap-3 rounded-full border border-background/40 px-6 py-3 text-background transition hover:border-transparent hover:bg-background hover:text-foreground"
                >
                  <MailIcon />
                  Send details
                </a>
              </div>
            </div>
            <div className="rounded-2xl bg-background/10 p-6">
              <form className="grid gap-4 text-sm">
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-background/80">Name</span>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="rounded-lg border border-background/30 bg-background/90 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-background/80">Event date</span>
                  <input
                    type="date"
                    className="rounded-lg border border-background/30 bg-background/90 px-4 py-3 text-foreground focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-background/80">Guest count</span>
                  <input
                    type="number"
                    min={2}
                    placeholder="Approximate number"
                    className="rounded-lg border border-background/30 bg-background/90 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="font-semibold text-background/80">Your flavor dreams</span>
                  <textarea
                    rows={4}
                    placeholder="Tell us about the mood, flavors, or inspiration."
                    className="rounded-lg border border-background/30 bg-background/90 px-4 py-3 text-foreground placeholder:text-foreground/40 focus:border-accent focus:outline-none"
                  />
                </label>
                <p className="text-xs text-background/60">
                  Submit the details above through your preferred contact method—we&apos;ll respond within 24 hours with tasting options and sketches.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-12 pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10 md:px-16 lg:px-20">
        <p className="font-serif text-base text-foreground">Nivora Home Bakery</p>
        <div className="flex flex-wrap gap-6">
          <a href="#hero" className="hover:text-foreground">
            Back to top
          </a>
          <a href="https://www.instagram.com" className="hover:text-foreground" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="https://maps.app.goo.gl/" className="hover:text-foreground" target="_blank" rel="noreferrer">
            Alexandria, VA
          </a>
        </div>
        <p className="text-xs text-muted">
          Crafted with buttercream &amp; love. © {new Date().getFullYear()} Nivora.
        </p>
      </footer>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5 13.25v2.5a1.25 1.25 0 0 1-1.37 1.247 15.942 15.942 0 0 1-7.256-2.5 15.57 15.57 0 0 1-4.6-4.6 15.94 15.94 0 0 1-2.5-7.256A1.25 1.25 0 0 1 1.997 1.3h2.503a1.25 1.25 0 0 1 1.25 1.089c.086.932.28 1.848.578 2.729a1.25 1.25 0 0 1-.283 1.274L5.2 7.236a12.5 12.5 0 0 0 7.566 7.566l.845-.846a1.25 1.25 0 0 1 1.274-.283c.88.298 1.797.492 2.73.578a1.25 1.25 0 0 1 1.085 1.249Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="size-4"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.5 5.75A1.75 1.75 0 0 1 4.25 4h11.5A1.75 1.75 0 0 1 17.5 5.75v8.5A1.75 1.75 0 0 1 15.75 16h-11.5A1.75 1.75 0 0 1 2.5 14.25v-8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="m3 6 6.62 4.414a1 1 0 0 0 1.1 0L17 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
