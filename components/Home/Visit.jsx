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
      line1: "Mon - Sat: 10:00 AM - 8:30 PM",
      line2: "Sunday: 11:00 AM - 7:00 PM",
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

  const whatsappNumber = "919666969552";
  const whatsappMessage = "Hi! I would like to know more about your store.";
  const whatsappLink =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappMessage);

  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.3593819327875!2d83.3599928!3d17.821780099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b2d4aa6ce29%3A0x300454a423a81bb1!2sR.R%20BRO%27S%20MULTI%20SHOPPING%20MALL!5e0!3m2!1sen!2sin!4v1772775264812!5m2!1sen!2sin";

  return (
    <section
      id="visit"
      className="bg-[#e8faf8] px-[70px] py-[110px] grid grid-cols-2 gap-[90px] items-center max-[960px]:grid-cols-1 max-[960px]:px-6 max-[960px]:py-[70px] max-[960px]:gap-12"
    >
      <div>
        <span className="text-[0.68rem] tracking-[0.2em] uppercase text-teal-600 mb-[10px] block font-semibold">
          Come Visit Us
        </span>

        <h2 className="font-serif text-[clamp(2rem,3vw,3rem)] font-light leading-[1.15] mb-5 text-black">
          Find Us <em className="italic text-teal-600">In-Store</em>
        </h2>

        <p className="text-[0.88rem] text-gray-500 leading-[1.85] mb-10 font-light">
          We would love to welcome you. Walk in during our opening hours and our
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

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 mt-10 px-7 py-[14px] rounded-full no-underline transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_8px_28px_rgba(37,211,102,0.35)]"
          style={{ backgroundColor: "#25D366" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="20"
            height="20"
            fill="white"
          >
            <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.364.638 4.673 1.848 6.688L2.667 29.333l6.823-1.792A13.29 13.29 0 0 0 16.002 29.333C23.364 29.333 29.333 23.362 29.333 16S23.364 2.667 16.002 2.667z" />
          </svg>

          <span className="text-white text-[0.75rem] tracking-[0.14em] uppercase font-semibold">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      <div className="relative rounded-[16px] overflow-hidden shadow-[0_20px_60px_rgba(17,124,111,0.15)] border border-teal-200/50 h-[480px]">
        <iframe
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        />
      </div>

      
    </section>
  );
}