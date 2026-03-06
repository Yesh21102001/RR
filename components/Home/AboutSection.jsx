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
            RR Bros's Multi Shopping Mall is a trusted shopping destination known for its specialty in Pelli Dandalu (wedding garlands). With over 2 years of experience since our ready-made store entry in 2024, we have grown into a large multi-category shopping complex serving customers with quality products and excellent service.

            Our store offers a wide range of collections including Men’s Wear, Women’s Wear, Kids Wear, Jewellery, and Sandals, making it a complete family shopping destination under one roof. We focus on providing stylish, high-quality, and affordable products for every occasion, especially weddings and festive events.

            Founded by Proprietor Raja Reddy, RR Bros's Multi Shopping Mall is committed to delivering the best shopping experience with variety, quality, and customer satisfaction.
          </p>
        </div>

      </div>
    </section>
  );
}
