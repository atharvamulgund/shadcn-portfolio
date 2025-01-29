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
        <p className="w-[80%] text-gray-500 dark:text-gray-400 sm:w-[60%] text-center sm:text-2xl">
          Greetings! 👋 Hi, I'm Atharva Mulgund, a Software Engineer passionate about building seamless, efficient, and user-centric digital experiences. I thrive on solving complex challenges and optimizing performance to drive innovation.</p>
          

        <a href="https://drive.google.com/file/d/1wpPklK4qXchNMauwMJULrqZCDnjYrfGY/view?usp=sharing">
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
