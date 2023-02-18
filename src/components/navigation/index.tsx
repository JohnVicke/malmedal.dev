import { MobileNavigation } from "./mobile-navigation";
import { NavigationItem } from "./navigation-item";
import { SideNavigation } from "./side-navigation";

export function Navigation(props: { navigation: NavigationItem[] }) {
  return (
    <>
      <SideNavigation className="hidden md:block" {...props} />
      <MobileNavigation className="block md:hidden" {...props} />
    </>
  );
}
