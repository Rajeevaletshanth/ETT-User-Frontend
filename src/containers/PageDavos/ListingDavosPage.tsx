//import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage2";
//import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import SectionDisposalNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories1";
import { TaxonomyType } from "data/types";
import React, { FC } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";
import SectionTransferCard from "./SectionTransferCard";
import { Helmet } from "react-helmet";
import heroRightImage from "images/hero-right-car.png";
import CardCategory6 from "components/CardCategory6/CardCategory6";

export interface ListingDavosPageProps {
  className?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Enjoy the great cold",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Sleep in a floating way",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Cool in the deep forest",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "In the billionaire's house",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "#",
    name: "Zurich to Davos Mercedes V Class1000 CHF",
    taxonomy: "category",
    count: 17288,
    thumbnail:
      "https://images.pexels.com/photos/381292/pexels-photo-381292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "2",
    href: "#",
    name: "Davos to Zurich Mercedes V Class1000 CHF",
    taxonomy: "category",
    count: 2118,
    thumbnail:
      "https://images.pexels.com/photos/2412609/pexels-photo-2412609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "#",
    name: "Zurich to Davos Mercedes V Class1000 CHF",
    taxonomy: "category",
    count: 36612,
    thumbnail:
      "https://images.pexels.com/photos/732895/pexels-photo-732895.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "#",
    name: "Davos to Zurich Mercedes V Class1000 CHF",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "#",
    name: "Davos to Zurich Mercedes V Class1000 CHF",
    taxonomy: "category",
    thumbnail:
      "https://images.pexels.com/photos/2526128/pexels-photo-2526128.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    listingType: "experiences",
  },
];

const ListingDavosPage: FC<ListingDavosPageProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-ListingCarPage relative overflow-hidden ${className}`}
      data-nc-id="ListingCarPage"
    >
      <Helmet>
        <title>ETT || EUROPE TOURS & TRAVELS</title>
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
              <span className="ml-2.5">Davos</span>
            </>
          }
          className="pt-10 pb-24 lg:pb-28 lg:pt-16 "
        />
        <div className=" space-y-24 mb-24 ">
         {/* SECTION 0 */}
         <h2 className="text-4xl font-semibold">VIP Transfers</h2>
         <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={DEMO_CATS_2[0]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 grid grid-rows-2 gap-6">
            <CardCategory6 taxonomy={DEMO_CATS_2[3]} />
            <CardCategory6 taxonomy={DEMO_CATS_2[1]} />
          </div>
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 flex">
            <CardCategory6 taxonomy={DEMO_CATS_2[4]} />
          </div>
        </div>
        </div>

        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-28" />

        {/* SECTION 2 */}
        <SectionTransferCard className="pb-24 lg:pb-28" />
        {/* <div className="relative py-16">
        <SectionDisposalNewCategories
          heading="Transfer"
          subHeading=""
          categoryCardType="card5"
          itemPerRow={5}
          uniqueClassName="PageHome_s3"
        />
        </div> */}
        
      </div>
    </div>
  );
};

export default ListingDavosPage;
