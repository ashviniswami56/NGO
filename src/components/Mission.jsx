// components/Mission.js
import Image from "next/image";

const Mission = () => {
  return (
    <section id="mission" className="bg-white py-14 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Our Mission Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
        🧡 Our Mission
        </h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Image on left */}
          <div className="w-full lg:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/hero1.jpg"
                alt="Mission"
                width={600}
                height={400}
                quality={100}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Text on right */}
          <div className="w-full lg:w-1/2 bg-white p-6 md:p-8 shadow-xl rounded-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-5 leading-tight">
              Best NGO for CSR in India:
              <br className="hidden sm:block" />
              <span className="text-orange-500"> The World Saver Foundation</span>
            </h2>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              We are the best NGO in Pune NCR and best NGO website India. We
              endeavor for holistic growth of the Nation and its people. Support by
              Donate to NGO or Donate to Poor.
              <br /><br />
              We mainly focus on poverty in India, Child Development, Women Empowerment,
              Skill Development, Education for poor & Street Children, Health programs,
              Environment protection, Elderly care, Rural development programs, Donate for Livelihood, etc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
