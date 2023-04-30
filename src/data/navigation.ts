import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    children:[],
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
    children:[],
    isNew: true,
  },
  /* {
    id: ncNanoId(),
    href: "/tour",
    name: "Tour Packages",
    children:[],
    isNew: true,
  }, */
  {
    id: ncNanoId(),
    href: "/transportation",
    name: "Transportation",
    children:[],
    isNew: true,
  },
  // {
  //   id: ncNanoId(),
  //   href: "/davos",
  //   name: "Davos",
  //   children:[],
  //   isNew: true,
  // },
  {
    id: ncNanoId(),
    href: "/film",
    name: "Film Production",
    children:[],
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact",
    children:[],
    isNew: true,
  },
];
