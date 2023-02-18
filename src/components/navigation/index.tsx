import { MobileNavigation } from "./mobile-navigation";
import { SideNavigation } from "./side-navigation";

export interface NavigationItem {
  readonly title: string;
  readonly href: string;
}

export function Navigation(props: { navigation: NavigationItem[] }) {
  return (
    <>
      <SideNavigation className="hidden md:block" {...props} />
      <MobileNavigation className="block md:hidden" {...props} />
    </>
  );
}
