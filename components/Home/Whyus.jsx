const cards = [
  {
    num: "01",
    title: "Wide Selection",
    body: "Hundreds of styles across women's, men's, kids' wear, and jewellery — refreshed every season with the latest trends.",
  },
  {
    num: "02",
    title: "Quality You Can Feel",
    body: "Every item is hand‑picked for quality. We stock only trusted brands and premium fabrics that speak for themselves.",
  },
  {
    num: "03",
    title: "Friendly Expert Staff",
    body: "Our experienced team is always on hand to guide you and help you find the perfect outfit for any occasion.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-[110px] px-[70px] bg-[var(--t50)] max-[960px]:py-[70px] max-[960px]:px-6">

      {/* Head */}
      <div className="flex items-end justify-between mb-14 max-[960px]:flex-col max-[960px]:items-start max-[960px]:gap-3">
        <div>
          <span className="text-[0.68rem] tracking-[0.2em] uppercase text-[var(--t700)] mb-2.5 block font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-serif text-[clamp(2rem,3.5vw,3.2rem)] font-light leading-[1.15]">
            Shopping the Way
            <br />
            <em className="italic text-[var(--t700)]">It Should Be</em>
          </h2>
        </div>
        <p className="text-[0.82rem] text-[var(--muted)] max-w-[200px] text-right leading-[1.7] max-[960px]:text-left max-[960px]:max-w-full">
          A store you&apos;ll always want to come back to.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-6 max-[960px]:grid-cols-1">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-[var(--white)] rounded-[14px] px-9 py-11
              border border-[rgba(47,196,178,0.15)]
              transition-[transform,box-shadow] duration-300
              hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(17,124,111,0.12)]"
          >
            <div className="font-serif text-[3.5rem] font-light text-[rgba(47,196,178,0.25)] leading-none mb-5">
              {c.num}
            </div>
            <h3 className="font-serif text-[1.4rem] font-semibold mb-3.5">{c.title}</h3>
            <p className="text-[0.85rem] text-[var(--muted)] leading-[1.8]">{c.body}</p>
          </div>
        ))}
      </div>

    </section>
  );
}