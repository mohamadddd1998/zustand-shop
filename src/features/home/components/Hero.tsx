import { hero } from "@/shared/constants/db";
import { images } from "@/shared/constants/images";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <div className="bg-primary pb-6 flex flex-col lg:flex-row items-center rounded-4xl">
          <div className="basis-1/2">
            <figure className="flex justify-center items-center before:bg-darkGray before:w-38 before:h-38 before:absolute before:rounded-full">
              <img
                src={images[hero.image]}
                className="-rotate-15"
                width="350"
              />
            </figure>
          </div>
          <div className="basis-1/2 space-y-2 text-center text-white">
            <h1 className="text-4xl">{hero.title}</h1>
            <h3 className="text-2xl"> {hero.subtitle} </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
