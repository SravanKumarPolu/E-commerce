import heroImg from "../assets/images/heroImg.png";

interface HeroProps {
  heading?: string;
  subheading?: string;
}

const Hero: React.FC<HeroProps> = ({
  heading = "Latest Arrivals",
  subheading = "Our Best Sellers",
}) => {
  return (
    <section className="flex flex-col sm:flex-row border border-gray-400 rounded-lg overflow-hidden">
      {/* Hero left side */}
      <div className="flex w-full sm:w-1/2 items-center justify-center py-10 sm:py-0 bg-gray-100">
        <div className="text-gray-800 px-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="block w-10 md:w-12 h-[2px] bg-gray-800"></span>
            <p className="font-medium text-sm md:text-base">{subheading}</p>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          <div className="flex items-center gap-2 mt-2">
            <button className="font-semibold text-sm md:text-base text-white bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-md transition-all">
              Shop Now
            </button>
            <span className="block w-10 md:w-12 h-[2px] bg-gray-800"></span>
          </div>
        </div>
      </div>

      {/* Hero right side */}
      <div className="w-full sm:w-1/2 h-auto">
        <img
          src={heroImg}
          alt="Hero Image"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
