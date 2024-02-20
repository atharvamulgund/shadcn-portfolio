import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";
import { ArrowDownToLine } from "lucide-react";
const Hero = () => {
  return (
    <>
      <div className="flex h-[85vh] justify-center flex-col items-center bg-img gap-6">
        <div className="intro-tag flex justify-center items-center gap-4 ">
          <h3 className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text  text-3xl sm:text-6xl font-semibold p-2">
            Engage
          </h3>
          <h3 className="bg-gradient-to-b from-purple-600 to-pink-500 text-transparent bg-clip-text text-3xl  sm:text-6xl font-semibold p-2">
            Craft
          </h3>
          <h3 className="bg-gradient-to-b from-red-500 to-yellow-300 text-transparent bg-clip-text text-3xl  sm:text-6xl font-semibold p-2">
            Unveil
          </h3>
        </div>
        <div className="flex w-[190px] h-[200px] bg-gradient-to-tr">
          <img
            src={profileImg}
            alt="Athaarva Mulgund"
            loading="lazy"
            width="100%"
            className="rounded-full object-cover"
          />
        </div>
        <p className="info text-stone-200 w-[80%] sm:w-[60%] text-center sm:text-2xl">
          Greetings! 👋 I'm Atharva Mulgund, a Front-End Sorcerer 🧙‍♂️ weaving seamless digital experiences across the techscape. 
          Crafting code spells to optimize journeys in the multi-device realm. 🌐✨ Let's elevate your digital presence together!</p>
          

        <a href="https://drive.google.com/drive/folders/1N1iUuFrFRovVtWOrl3Qft6gNgbywZxTe">
        <Button variant="link" className="flex gap-2 text-white items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <ArrowDownToLine /> Resume
        </Button>
        </a>
        <p className="bottom-icon"> </p>
      </div>
    </>
  );
};

export default Hero;
