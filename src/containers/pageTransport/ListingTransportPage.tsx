import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage1";
import { TaxonomyType } from "data/types";
import React, { FC } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";
import { Helmet } from "react-helmet";
import heroRightImage from "images/hero-right-car.png";

export interface ListingCarPageProps {
  className?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Enjoy the Beauty of Brazil ",
    taxonomy: "category",
    count: 17288,
    thumbnail:
      "https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    listingType: "experiences",
  },
  {
    id: "2",
    href: "#",
    name: "Enjoy the Beauty of Paris",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences",
  },
  {
    id: "3",
    href: "#",
    name: "Enjoy the Beauty of Bangkok",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences",
  },
  {
    id: "5",
    href: "#",
    name: "Enjoy the Beauty of Singapore",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3152124/pexels-photo-3152124.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    listingType: "experiences",
  },
  {
    id: "4",
    href: "#",
    name: "Enjoy the Beauty of Seoul",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences",
  },
];

const ListingCarPage: FC<ListingCarPageProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-ListingCarPage relative overflow-hidden ${className}`}
      data-nc-id="ListingCarPage"
    >
      <Helmet>
        <title>TRANSPORT || EUROPE TOURS & TRAVELS</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative">
        {/* SECTION HERO */}
        <SectionHeroArchivePage
          rightImage={heroRightImage}
          currentPage="Cars"
          currentTab="Disposal"
          listingType={
            <>
              <i className="text-2xl las la-car"></i>
              <span className="ml-2.5">Total Transport</span>
            </>
          }
          className="pt-10 pb-24 lg:pb-28 lg:pt-16 "
        />

        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-28" />
      </div>
    </div>
  );
};

export default ListingCarPage;
