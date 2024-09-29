import heroImg from "../assets/images/Hero_Img.png";

interface HeroProps {
  heading?: string;
  subheading?: string;
}

const Hero: React.FC<HeroProps> = ({
  heading = "Latest Arrivals",
  subheading = "Our Best Sellers",
}) => {
  return (
    <section className="flex flex-col sm:flex-row items-center border border-gray-300
      bg-gradient-to-r from-gray-100 to-gray-200 rounded overflow-hidden  shadow-lg ">
      {/* Hero left side */}


      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 '>
        <div className='text-[#414141]'>
          {/* Subheading */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <span className="block w-10 md:w-12 h-[2px] bg-gray-800"></span>
            <p className="font-medium text-sm md:text-base">{subheading}</p>
          </div>
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
            {heading}
          </h1>
          {/* Call to Action */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
            <button className="font-semibold text-sm md:text-base text-white bg-gray-800 hover:bg-gray-900 py-3 px-8 rounded-md transition-all shadow-md">
              Shop Now
            </button>
            <span className="block w-10 md:w-12 h-[2px] bg-gray-800"></span>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <div className="w-full sm:w-1/2 h-full sm:h-auto">
        <img
          src={heroImg}
          alt="Hero Image"
          className="w-full h-full object-cover "
        />
      </div>
    </section>
  );
};

export default Hero;
