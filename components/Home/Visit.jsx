export default function Visit() {
  const details = [
    {
      icon: "📍",
      label: "Address",
      line1: "123, Main Market Road, Near City Square",
      line2: "Hyderabad, Telangana 500001",
    },
    {
      icon: "🕐",
      label: "Store Hours",
      line1: "Mon – Sat: 10:00 AM – 8:30 PM",
      line2: "Sunday: 11:00 AM – 7:00 PM",
    },
    {
      icon: "📞",
      label: "Phone",
      line1: "+91 98765 43210",
      line2: null,
    },
    {
      icon: "✉️",
      label: "Email",
      line1: "hello@elegancestore.in",
      line2: null,
    },
  ];

  return (
    <section
      id="visit"
      className="px-[70px] py-[110px] grid grid-cols-2 gap-[90px] items-center max-[960px]:grid-cols-1 max-[960px]:px-6 max-[960px]:py-[70px] max-[960px]:gap-12"
    >
      {/* LEFT SIDE */}
      <div>
        <span className="text-[0.68rem] tracking-[0.2em] uppercase text-teal-600 mb-[10px] block font-semibold">
          Come Visit Us
        </span>

        <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-[1.15] mb-5">
          Find Us <em className="italic text-teal-600">In-Store</em>
        </h2>

        <p className="text-[0.88rem] text-gray-500 leading-[1.85] mb-10 font-light">
          We'd love to welcome you. Walk in during our opening hours and our
          warm, friendly team will be happy to assist you with everything.
        </p>

        <div className="flex flex-col">
          {details.map((d, i) => (
            <div
              key={i}
              className="flex items-start gap-5 py-6 border-b border-teal-200/30 first:pt-0"
            >
              <div className="w-[46px] h-[46px] rounded-full bg-teal-50 border border-teal-200/40 flex items-center justify-center text-[1.2rem] shrink-0 mt-[2px]">
                {d.icon}
              </div>

              <div>
                <div className="text-[0.65rem] tracking-[0.18em] uppercase text-teal-600 mb-1 font-semibold">
                  {d.label}
                </div>

                <div className="text-[0.92rem] leading-[1.65] text-gray-800">
                  {d.line1}
                  {d.line2 && (
                    <>
                      <br />
                      {d.line2}
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <div className="relative overflow-hidden bg-gradient-to-br from-teal-100 to-teal-300 rounded-[16px] px-10 py-[60px] text-center border border-teal-300 shadow-[0_20px_60px_rgba(17,124,111,0.12)]">
          {/* Pattern Overlay */}
          <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_30px,rgba(17,124,111,0.06)_30px,rgba(17,124,111,0.06)_31px)]"></div>

          <div className="relative z-10">
            <span className="text-[4rem] block mb-4">📍</span>

            <h3 className="font-serif text-[1.6rem] font-normal mb-2 text-gray-900">
              Elegance Store
            </h3>

            <p className="text-[0.82rem] text-gray-600 leading-[1.7]">
              123, Main Market Road
              <br />
              Hyderabad, Telangana 500001
            </p>

            <a
              href="#"
              className="inline-block mt-7 bg-teal-900 text-white px-8 py-3 rounded-full text-[0.72rem] tracking-[0.14em] uppercase font-semibold no-underline transition-all duration-300 hover:bg-teal-600 hover:-translate-y-[2px]"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}