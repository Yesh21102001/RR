"use client";

const categories = [
  {
    id: 1,
    title: "Men's Wear",
    image: "/1.png",
  },
  {
    id: 2,
    title: "Women's Wear",
    image: "/3.png",
  },
  {
    id: 3,
    title: "Kids' Wear",
    image: "/2.png",
  },
  {
    id: 4,
    title: "Jewellery",
    image: "/4.png",
  },
];

export default function Categories() {
  return (
    <section className="py-[70px] px-[60px] bg-white max-[768px]:py-10 max-[768px]:px-5">

      {/* Section Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-500 text-[0.72rem] tracking-[0.2em] uppercase font-medium mb-2">
          Shop By
        </p>

        <h2 className="font-serif text-[2.2rem] font-semibold text-gray-900 leading-tight max-[768px]:text-[1.6rem]">
          Collections
        </h2>
      </div>

      {/* Grid: 4 cols desktop → 2 cols mobile */}
      <div className="grid grid-cols-4 gap-6 max-w-[1200px] mx-auto max-[768px]:grid-cols-2 max-[768px]:gap-4">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group cursor-pointer flex flex-col items-center"
          >

            {/* Image */}
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[3/4]">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Title */}
            <p className="mt-4 font-serif text-[1.05rem] font-semibold text-gray-900 tracking-wide text-center group-hover:text-[#117C6F] transition-colors duration-300 max-[768px]:text-[0.95rem]">
              {cat.title}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}