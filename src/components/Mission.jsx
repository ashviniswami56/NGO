// components/Mission.js
import Image from "next/image";

const Mission = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8">
        {/* Image on left */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/donation.jpg"
            alt="Mission"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </div>

        {/* Text on right */}
        <div className="w-full lg:w-1/2 bg-white p-6 shadow-lg rounded-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
            Best NGO for CSR in India: <br className="hidden sm:block" /> The World Saver Foundation
          </h2>
          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            We are the best NGO in Delhi NCR and best NGO website India. We
            endeavor for holistic growth of the Nation and its people. We are
            the best Social Organization in Delhi NCR, India. Support by Donate
            to NGO or Donate to Poor. We mainly focus on poverty in India,
            Child Development, Women Empowerment, Skill Development, Education
            for poor & Street Children, Health programs, Environment protection,
            Consumer awareness, Elderly care, Rural development programs, Slum
            development, Donate for Livelihood, etc. At Nitya, we believe that
            each and every person is entitled to a worthy, meaningful, and
            dignified life under Article 21 (Right to life and personal liberty)
            of the Indian constitution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
