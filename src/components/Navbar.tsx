import { ModeToggle } from "@/components/mode.toggle";
// import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { AlignJustify} from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <>
      <NavigationMenu className="">
        <NavigationMenuList className="flex w-screen  justify-around mt-2 items-center gap-8 ">
          <Link to="/">
            <NavigationMenuItem className="font-extrabold text-2xl">
            <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Arthur
    </h2>
            </NavigationMenuItem>
          </Link>
          <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          {/* <NavigationMenuList className="hidden sm:flex justify-center items-center gap-8 sm:h-16">
            <Link to="/about">
              <NavigationMenuItem>About</NavigationMenuItem>
            </Link>
            <Link to="/blogs">
              <NavigationMenuItem>Blogs</NavigationMenuItem>
            </Link>
            <Link to="/experience">
              <NavigationMenuItem>Experience</NavigationMenuItem>
            </Link>
            <Link to="/contact-me">
              <NavigationMenuItem>
                <Button variant="secondary">Contact Me</Button>
              </NavigationMenuItem>
            </Link>
            <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
         <NavigationMenuList className="flex sm:hidden justify-center items-center gap-8 sm:h-16">
         <DropdownMenu >
            <DropdownMenuTrigger  className="sm:hidden flex">
                  <AlignJustify  />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link to="/about">
                  <NavigationMenuItem>About</NavigationMenuItem>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/blogs">
                  <NavigationMenuItem>Blogs</NavigationMenuItem>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/experience">
                  <NavigationMenuItem>Experience</NavigationMenuItem>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/contact-me">
                  <NavigationMenuItem>
                    <Button variant="secondary">Contact Me</Button>
                  </NavigationMenuItem>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <NavigationMenuItem>
              <ModeToggle />
            </NavigationMenuItem>
         </NavigationMenuList> */}
        
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default Navbar;
