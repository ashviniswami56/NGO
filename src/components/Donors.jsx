// components/Donors.js
import Image from "next/image";

const donors = [
  { src: "/maef.png", alt: "MAEF" },
  { src: "/textiles.jpg", alt: "Ministry of Textiles" },
  { src: "/delhi.png", alt: "Delhi Govt" },
  { src: "/bhagwati.png", alt: "Bhagwati" },
  { src: "/tdi.png", alt: "TDI" },
];

const Donors = () => {
  return (
    <section className="py-10 px-4 md:px-16 bg-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Our Donors</h2>
      <div className="text-orange-400 text-xl mb-8">🧡</div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
        {donors.map((donor, idx) => (
          <Image
            key={idx}
            src={donor.src}
            alt={donor.alt}
            width={160}
            height={80}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default Donors;
