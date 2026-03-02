"use client";

export default function AboutSection() {
  return (
    <section className="bg-[#fdf6f0] py-[80px] px-[60px] max-[1024px]:py-[60px] max-[1024px]:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-row gap-[60px] items-start max-[1024px]:flex-col">

        {/* ── LEFT: 2×2 Image Grid ── */}
        <div className="grid grid-cols-2 gap-3 w-[460px] flex-shrink-0 max-[1024px]:w-full">

          {/* Card 1 – top-left: logo badge */}
          <div className="bg-[#2b1800] rounded-[18px] flex flex-col items-center justify-center text-center px-5 py-8 min-h-[280px]">
            <p className="text-[#c9963a] text-[9px] tracking-[3px] uppercase font-light mb-3">BHIMAVARAM</p>
            <div className="relative w-[88px] h-[88px] flex items-center justify-center mb-3 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-[#c9963a]">
              <div className="absolute inset-[7px] rounded-full border border-[rgba(201,150,58,0.35)]" />
              <span className="text-[#c9963a] text-[22px] relative z-10">✦</span>
            </div>
            <p className="text-[#c9963a] text-[9px] tracking-[4px] uppercase mb-0.5">DELICIOUS</p>
            <p className="text-white text-[20px] font-black tracking-[3px] mb-1.5">BIRYANIS</p>
            <p className="text-[#c9963a] text-[10px] italic mb-1.5">Estd. 2022</p>
            <p className="text-[#c9963a] text-[7px] tracking-[2px] uppercase">MULTI CUISINE RESTAURANT</p>
          </div>

          {/* Card 2 – top-right: 50 varieties */}
          <div className="bg-[#2b1800] rounded-[18px] flex flex-col items-center justify-center text-center px-5 py-8 min-h-[220px]">
            <p className="text-[#c9963a] text-[9px] tracking-[3px] uppercase font-light mb-3">BHIMAVARAM</p>
            <div className="w-9 h-9 rounded-full border border-[#c9963a] flex items-center justify-center mb-2.5">
              <span className="text-[#c9963a] text-[13px]">✦</span>
            </div>
            <p className="text-white text-[68px] font-black leading-none mb-1 max-[600px]:text-[52px]">50</p>
            <p className="text-[#c9963a] text-[10px] tracking-[1px] mb-0.5">Varieties of</p>
            <p className="text-white text-[20px] font-black tracking-[3px]">BIRYANIS</p>
          </div>

          {/* Card 3 – bottom-left: 50 varieties */}
          <div className="bg-[#2b1800] rounded-[18px] flex flex-col items-center justify-center text-center px-5 py-8 min-h-[220px]">
            <p className="text-[#c9963a] text-[9px] tracking-[3px] uppercase font-light mb-3">BHIMAVARAM</p>
            <div className="w-9 h-9 rounded-full border border-[#c9963a] flex items-center justify-center mb-2.5">
              <span className="text-[#c9963a] text-[13px]">✦</span>
            </div>
            <p className="text-white text-[68px] font-black leading-none mb-1 max-[600px]:text-[52px]">50</p>
            <p className="text-[#c9963a] text-[10px] tracking-[1px]">Varieties of</p>
          </div>

          {/* Card 4 – bottom-right: logo badge */}
          <div className="bg-[#2b1800] rounded-[18px] flex flex-col items-center justify-center text-center px-5 py-8 min-h-[280px]">
            <p className="text-[#c9963a] text-[9px] tracking-[3px] uppercase font-light mb-3">BHIMAVARAM</p>
            <div className="relative w-[88px] h-[88px] flex items-center justify-center mb-3 before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-2 before:border-[#c9963a]">
              <div className="absolute inset-[7px] rounded-full border border-[rgba(201,150,58,0.35)]" />
              <span className="text-[#c9963a] text-[22px] relative z-10">✦</span>
            </div>
            <p className="text-[#c9963a] text-[9px] tracking-[4px] uppercase mb-0.5">DELICIOUS</p>
            <p className="text-white text-[20px] font-black tracking-[3px]">BIRYANIS</p>
          </div>

        </div>

        {/* ── RIGHT: Content ── */}
        <div className="flex-1 pt-1">
          <p className="text-[#b8874a] text-[15px] font-normal mb-2.5">About Us</p>
          <h2 className="font-serif text-[38px] font-black text-[#1a0d02] leading-[1.25] mb-[22px] max-[600px]:text-[28px]">
            Welcome to Bhimavaram Delicious Biryanis
          </h2>
          <p className="text-[15px] text-[#4a3525] leading-[1.85] mb-10 max-w-[580px]">
            Bhimavaram Delicious Biryanis is a popular restaurant located in Tagarapuvalasa,
            Visakhapatnam, known for serving a wide variety of mouth-watering dishes. From
            authentic Andhra-style biryanis to crispy starters, sizzling tandoori specials,
            flavorful noodles, and fried rice – we have something for everyone. Our dishes are
            prepared with fresh ingredients and traditional recipes to ensure rich taste and
            quality in every bite. You can order your favorite meals easily through Zomato and
            Swiggy, or directly from our own mobile app – Bhimavaram Delicious Biryanis App –
            for quicker service and exclusive deals. Whether you're dining at home with family
            or planning a gathering with friends, our food is perfect for every occasion. We
            take pride in fast delivery, hygienic preparation, and customer satisfaction.
            Experience the true flavors of Bhimavaram right here in Visakhapatnam.
          </p>

          {/* Stats */}
          <div className="flex items-center">
            <div className="flex items-center gap-3.5 border-l-[3px] border-[#c9963a] pl-[18px] pr-11 max-[600px]:pr-6">
              <span className="font-serif text-[42px] font-black text-[#1a0d02] leading-none max-[600px]:text-[32px]">5</span>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#7a5c3c] font-light leading-[1.4]">Years of</span>
                <span className="text-[13px] font-bold text-[#1a0d02] tracking-[2px] leading-[1.4]">EXPERIENCE</span>
              </div>
            </div>
            <div className="flex items-center gap-3.5 border-l-[3px] border-[#c9963a] pl-[18px] max-[600px]:pr-6">
              <span className="font-serif text-[42px] font-black text-[#1a0d02] leading-none max-[600px]:text-[32px]">50+</span>
              <div className="flex flex-col">
                <span className="text-[13px] text-[#7a5c3c] font-light leading-[1.4]">Popular</span>
                <span className="text-[13px] font-bold text-[#1a0d02] tracking-[2px] leading-[1.4]">DISHES</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}