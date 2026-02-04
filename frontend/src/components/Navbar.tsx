import { Link, useLocation } from "react-router";
import { ModeToggle } from "./ModeToggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
        <span className="font-bold text-lg tracking-tight">DENTAL TIME</span>
      </div>

      <NavigationMenu>
        <NavigationMenuList className="gap-2">
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              active={location.pathname === "/"}
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/">Inicio</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              active={location.pathname === "/pacientes"}
              className={navigationMenuTriggerStyle()}
            >
              <Link to="/pacientes">Pacientes</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
