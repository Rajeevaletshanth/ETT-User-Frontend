import React, { FC,useEffect,useState } from "react";
import Logo from "shared/Logo/Logo";
import Navigation from "shared/Navigation/Navigation";
import SearchDropdown from "./SearchDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import MenuBar from "shared/MenuBar/MenuBar";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";
import HeroSearchForm2MobileFactory from "components/HeroSearchForm2Mobile/HeroSearchForm2MobileFactory";
import AvatarDropdown from "./AvatarDropdown";
import { useSelector, useDispatch } from 'react-redux'
import DropdownTravelers from "./DropdownTravelers";

export interface MainNav1Props {
  className?: string;
}

const MainNav1: FC<MainNav1Props> = ({ className = "" }) => {
  const { signedIn } = useSelector((state:any) => state.auth.session)
  const { username, avatar } = useSelector((state:any) => state.auth.user)
  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container py-4 lg:py-5 relative flex justify-between items-center">
        <div className="hidden md:flex justify-start flex-1 items-center space-x-4 sm:space-x-10">
          <Logo className="w-32"/>
          <div className="hidden lg:block h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="hidden lg:block">
            <DropdownTravelers />
          </div>
        </div>

        <div className="hidden md:flex justify-end flex-1 items-center ">
            <SwitchDarkMode />
            <div className="px-1" />
            {signedIn && <span className="flex flex-row">
            <AvatarDropdown imgUrl={avatar}/> <span className="mt-2 ml-2 text-sm">{username}</span>
            </span>}

            <div className="px-1" />
            {!signedIn && 
              <ButtonPrimary href="/login">Sign up</ButtonPrimary>
            }
        </div>

        <div className="lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>


        {/* <div className="hidden md:flex flex-shrink-0 items-center justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex items-center space-x-0.5">
            <SwitchDarkMode />
            <SearchDropdown />
            <div className="px-1" />
            {isLoggedIn?
            <AvatarDropdown/> :
            <ButtonPrimary href="/login">Sign In</ButtonPrimary>
            }
          </div>
          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MainNav1;
