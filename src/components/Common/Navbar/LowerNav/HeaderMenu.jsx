import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../../../@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function HeaderMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger> <Link to="/">Home</Link> </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>Link</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuTrigger> <Link to="/Product">Product Page </Link>  </NavigationMenuTrigger>
            <NavigationMenuContent>
                Product Page
            </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
            <NavigationMenuTrigger> <Link to="/Collections">Collection Page </Link>  </NavigationMenuTrigger>
            <NavigationMenuContent>
                Product Page
            </NavigationMenuContent>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default HeaderMenu;
