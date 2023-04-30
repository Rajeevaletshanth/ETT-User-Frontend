import FooterLogo from "shared/Logo/FooterLogo";
import SocialsList1 from "shared/SocialsList1/SocialsList1";
import { CustomLink } from "data/types";
import Android from "../../images/btn-android.png"
import Ios from "../../images/btn-ios.png"
import React from "react";
import Input from "shared/Input/Input";
import ButtonCircle from "shared/Button/ButtonCircle";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Company",
    menus: [
      { href: "#", label: "Home" },
      { href: "#", label: "Tours Packages" },
      { href: "#", label: "Transportation" },
      { href: "#", label: "Fixed Departure" },
      { href: "#", label: "Contacts" },
    ],
  },
  {
    id: "5",
    title: "Company",
    menus: [
      { href: "#", label: "Gallery" },
      { href: "#", label: "Term & Conditions" },
      { href: "#", label: "Blog" },
      { href: "#", label: "Attractions" },
      { href: "#", label: "Mice" },
    ],
  },
  {
    id: "1",
    title: "CONTACT",
    menus: [
      { href: "#", label: "Europe Tours & Travels," },
      { href: "#", label: "VIA ABRUZZI 94 MILAN 20131 ITALY" },
      { href: "#", label: "+393516093653" },
      { href: "#", label: "" },
      { href: "#", label: "info@ettravels.com" },
    ],
  },
];

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200"  >
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4" >
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className="nc-Footer relative py-12 lg:py-20 border-t border-neutral-200 dark:border-neutral-700">
      <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
            <FooterLogo className="w-36"/>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
            <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start"/>
          </div>
        </div>
        {widgetMenus.map(renderWidgetMenuItem)}
        <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
          <div className="col-span-2 md:col-span-1">
          <form className="relative max-w-xl">
          <Input
            required
            aria-required
            placeholder="Your email"
            type="email"
            rounded="rounded-full"
          />
          <ButtonCircle
            type="submit"
            className="absolute transform top-1/2 -translate-y-1/2 right-[5px]"
          >
            <i className="las la-arrow-right text-xl"></i>
          </ButtonCircle>
        </form>
          </div>
          <div className="col-span-2 flex items-center md:col-span-3">
          <div className="col-span-2 md:col-span-1">
            <img src={Android} alt="android"/>
          </div>
          <div className="col-span-2 md:col-span-1">
            <img src={Ios} alt="mac"/>
          </div>
          </div>
        </div>
      </div>
      <p className="flex justify-center text-center mt-6 text-sm text-neutral-500"> © 2022 <a href="#" className="link">Europe Tours & Travels</a> . All rights reserved.</p>
    </div>
    // <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-400 dark:border-neutral-700" style={{borderStartStartRadius: "200px",paddingBottom:"0rem"}}>
      
    // </div>
  );
};

export default Footer;
