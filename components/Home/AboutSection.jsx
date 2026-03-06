"use client";

export default function AboutSection() {
  // Replace these URLs with your actual image paths e.g. "/images/card1.jpg"
  const cardImages = [
    "/IMG_5035.JPG.jpeg",   // 👈 Replace with your image 1
    "/IMG_5030.JPG.jpeg",   // 👈 Replace with your image 2
    "/IMG_5037.JPG.jpeg",   // 👈 Replace with your image 3
    "/IMG_5041.JPG.jpeg",   // 👈 Replace with your image 4
  ];

  return (
    <section className="bg-[rgba(244,253,251,0.92)] py-[80px] px-[60px] max-[1024px]:py-[60px] max-[1024px]:px-6">
      <div className="max-w-[1200px] mx-auto flex flex-row gap-[60px] items-start max-[1024px]:flex-col">

        {/* LEFT: 2x2 Image Grid */}
        <div className="grid grid-cols-2 gap-3 w-[460px] flex-shrink-0 max-[1024px]:w-full">
          {cardImages.map((src, index) => (
            <div
              key={index}
              className="rounded-[18px] overflow-hidden"
              style={{ aspectRatio: "1 / 1" }}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover block"
              />
            </div>
          ))}
        </div>

        {/* RIGHT: Content */}
        <div className="flex-1 pt-1">
          <p className="text-[#117C6F] text-[15px] font-normal mb-2.5">About Us</p>
          <h2 className="font-serif text-[38px] font-black text-[#1a0d02] leading-[1.25] mb-[22px] max-[600px]:text-[28px]">
            Welcome to RR Bro,s<br></br> Multi Shopping Mall
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
        </div>

      </div>
    </section>
  );
}
