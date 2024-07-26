import { socialData } from "@/data/index";
import twttierSystem from "@/assets/twitter system.png";
import twitterLight from "@/assets/twitter light.png";
import twitterDark from "@/assets/twitter dark.png";
import { useTheme } from "./useTheme";

function Footer() { 
  const {theme} = useTheme();
  return (
    <div className="text-center border-t p-4 sm:p-8">
    <div className="flex flex-col sm:flex-row items-center justify-center m-auto gap-5">
      <div className="flex gap-5">
        {socialData &&
          socialData?.map((item, key) => (
            <a
              href={item.link}
              className="text-sm md:text-md hover:text-indigo-500 flex justify-center items-center"
              key={key}
            >
              <img
                src={item?.platform == 'Twitter'?theme === "dark" ? twitterLight : theme == "light" ? twitterDark : twttierSystem :item.icon}
                alt={item.platform}
                width="30px"
                height="30px"
              />
            </a>
          ))}
      </div>
      <p className="text-md mt-2 text-gray-500">
        © <a href="#">Atharva Mulgund </a>
        {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  </div>
  );
}

export default Footer;
