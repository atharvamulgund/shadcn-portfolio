import { ModeToggle } from "@/components/mode.toggle";

const Navbar = () => {

  return (
    <>


<nav className="w-full">
    <div className="flex flex-wrap mx-4 justify-between sm:justify-around items-center sm:mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Arthur</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
           <ModeToggle />
        </div>
    </div>
</nav>

    </>
  );
};

export default Navbar;
