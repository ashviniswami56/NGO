// components/Campaigns.js
import Image from "next/image";

const campaigns = [
  { src: "/skills.jpeg", label: "Skills Training", bg: "bg-cyan-500" },
  { src: "/street-children.jpg", label: "Street Children", bg: "bg-rose-400" },
  { src: "/women.jpg", label: "Women Empowerment", bg: "bg-orange-400" },
  { src: "/tree-plantation.jpg", label: "Donate at Environment / Tree Plantation", bg: "bg-pink-600 text-white" },
  { src: "/rural.jpg", label: "Rural Development", bg: "bg-amber-300" },
  { src: "/elder.jpg", label: "Elderly Care", bg: "bg-purple-400" },
  { src: "/health.jpg", label: "Health Programs", bg: "bg-indigo-500 text-white" },
  { src: "/covid.jpg", label: "COVID Relief", bg: "bg-teal-600 text-white" },
];

const Campaigns = () => {
  return (
    <section className="bg-neutral-50 py-12 px-4 md:px-10">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Make World Happier</h2>
        <p className="text-sm text-purple-700 mt-2 uppercase font-semibold">Help Us Now</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {campaigns.map((item, idx) => (
          <div key={idx} className="relative group overflow-hidden rounded-lg shadow">
            <Image
              src={item.src}
              alt={item.label}
              width={400}
              height={300}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className={`absolute bottom-0 left-0 w-full px-3 py-2 ${item.bg} font-semibold`}>
              <p className="text-sm sm:text-base">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Campaigns;
