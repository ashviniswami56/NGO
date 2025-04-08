import Image from "next/image";

const SkillTrainingSection = () => {
  return (
    <section className="py-12 px-4 md:px-16 bg-white">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/skill.jpg"
            alt="Skill Training Project"
            width={600}
            height={400}
            className="rounded shadow-md object-cover w-full h-auto"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full lg:w-1/2 bg-white p-6 md:p-10 rounded shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            <span className="text-orange-400">🧡</span> Projects For Skill Training
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify">
            In India, skill development has been regarded as one of the most important
            factors in job generation. India enjoys a special demographic advantage because
            more than 60% of the population is under 25 years old. However, employability
            needs to be raised in order to benefit from such a sizable workforce. According
            to recent data, just 10% of recent graduates are employable, and the other 90%
            do not possess the necessary abilities to qualify for employment by a firm. The
            GDP of India is increasing at a healthy rate of about 6–8%, but employment growth
            is not keeping up.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillTrainingSection;
