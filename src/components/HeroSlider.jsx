const HeroSlider = ({ backgroundImage = "/hero.jpg" }) => (
  <div
    className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-cover bg-center flex items-center"
    style={{ backgroundImage: `url('${backgroundImage}')` }}
  >
    <div className="bg-black bg-opacity-50 text-white px-4 py-6 md:p-10 max-w-md md:max-w-xl ml-4 md:ml-10 rounded">
      <h4 className="uppercase text-xs md:text-sm mb-2 tracking-wider">
        Help the people in need
      </h4>
      <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-snug md:leading-tight">
        Your small help <br /> make world better
      </h2>
      <button className="bg-white text-black px-4 py-2 text-sm md:text-base rounded hover:bg-gray-200 transition duration-200">
        Discover More
      </button>
    </div>
  </div>
);

export default HeroSlider;
