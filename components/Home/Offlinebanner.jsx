"use client";

const features = [
  { icon: "👁️", title: "See It In Person", desc: "No surprises — colours and quality exactly as you see it." },
  { icon: "👐", title: "Try Before You Buy", desc: "Feel the fabric and try the fit before taking it home." },
  { icon: "🎀", title: "Personal Styling", desc: "Our staff helps you find the perfect look for every occasion." },
  { icon: "🏠", title: "Take It Home Today", desc: "No waiting, no delivery — carry your purchase home same day." },
];

export default function OfflineBanner() {
  return (
    <>
      <style>{`
        .box-decor::before {
          content: '';
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: rgba(47,196,178,0.08);
          top: -200px; right: -100px;
        }
        .box-decor::after {
          content: '';
          position: absolute;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: rgba(178,240,232,0.06);
          bottom: -100px; left: -80px;
        }
      `}</style>

      <section className="bg-white px-[70px] py-[110px] max-[960px]:px-6 max-[960px]:py-[70px]">
        <div className="box-decor relative overflow-hidden rounded-[20px] p-[80px] text-[var(--white)]
          bg-[linear-gradient(135deg,var(--t900)_0%,#0a4a42_100%)]
          grid grid-cols-2 gap-[70px] items-center
          max-[960px]:grid-cols-1 max-[960px]:gap-10 max-[960px]:p-7">

          {/* ── LEFT ── */}
          <div className="relative z-10">
            <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-[1.2] mb-5">
              The Joy of <em className="italic text-[var(--t300)]">Real</em>
              <br />Shopping
            </h2>

            <p className="text-[0.88rem] leading-[1.85] text-[rgba(255,255,255,0.72)] font-light mb-9">
              We believe the best shopping experience is one where you can touch the fabric,
              see the colours in real light, and walk out wearing your new favourite piece.
              That&apos;s why we are proudly an in‑store only destination.
            </p>

            <div className="inline-flex items-center gap-2.5
              bg-[rgba(47,196,178,0.15)] border border-[rgba(47,196,178,0.3)]
              rounded-[40px] px-6 py-2.5
              text-[0.72rem] tracking-[0.14em] uppercase font-semibold text-[var(--t300)]">
              🏪 No Online Orders · Visit Us in Person
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className="grid grid-cols-2 gap-4 relative z-10">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)]
                  rounded-xl p-5 transition-[background] duration-300
                  hover:bg-[rgba(255,255,255,0.12)]"
              >
                <div className="text-[1.8rem] mb-3">{f.icon}</div>
                <h4 className="text-[0.85rem] font-semibold mb-1.5">{f.title}</h4>
                <p className="text-[0.78rem] text-[rgba(255,255,255,0.55)] leading-[1.6]">{f.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}