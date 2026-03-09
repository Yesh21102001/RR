"use client";


const items = [
  "Online Orders Comming Soon", "Online Orders Comming Soon", "Online Orders Comming Soon", "Online Orders Comming Soon",
  "Online Orders Comming Soon", "Online Orders Comming Soon", "Online Orders Comming Soon", "Online Orders Comming Soon",
];

export default function Ticker1() {
    const doubled = [...items, ...items];

    return (
        <>
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>

            <div className="bg-[#117c6f] text-white py-[13px] overflow-hidden whitespace-nowrap">
                <div className="inline-flex animate-marquee">
                    {doubled.map((item, i) => (
                        <span
                            key={i}
                            className="text-[0.7rem] tracking-[0.2em] uppercase font-medium px-1 inline-flex items-center gap-[18px]"
                        >
                            {item}
                            <span className="text-[var(--t300)] text-[0.5rem]">✦</span>
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}