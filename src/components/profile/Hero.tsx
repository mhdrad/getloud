import { HeroComponent } from "@/types/component";

const Hero: HeroComponent = ({ title, subtitle }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <h1
        data-content={title}
        className="text-9xl text-white text-shadow-glitch"
      >
        {title}
      </h1>
      <h2 className="text-2xl text-gray-dark">{subtitle}</h2>
    </div>
  );
};

export default Hero;
