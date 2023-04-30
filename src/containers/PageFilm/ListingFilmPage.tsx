import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage3";
import React, { FC, useState, useEffect } from "react";
//import SectionGridFilterCard from "./SectionGridFilterCard";
import { Helmet } from "react-helmet";
//import { getAllPackages } from "services/apiServices";
import { TaxonomyType } from "data/types";
//import Pagination from "shared/Pagination/Pagination";
import Heading3 from "components/Heading/Heading3";

import War from "images/moviePosters/war1.jpg";
import Thozha from "images/moviePosters/thozha.jpg";
import Oopiri from "images/moviePosters/oopiri.jpg";
import Rabhasa from "images/moviePosters/RABHASA.jpg";
import Abbayithu_Ammayi from "images/moviePosters/ABBAYITHU AMMAYI.jpg";
import Rough from "images/moviePosters/Rough.jpg";
import Vastuprakara from "images/moviePosters/vastuprakara.jpg";
import Yamaleela from "images/moviePosters/YAMALEELA 2.jpg";
import NcImage from "shared/NcImage/NcImage";

export interface ListingStayPageProps {
  className?: string;
}
const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "War",
    taxonomy: "category",
    thumbnail: War
  },
  {
    id: "222",
    href: "/listing-stay",
    name: "Thozha",
    taxonomy: "category",
    thumbnail: Thozha
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "Oopiri",
    taxonomy: "category",
    thumbnail: Oopiri
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Rabhasa",
    taxonomy: "category",
    thumbnail: Rabhasa
  },

  {
    id: "222",
    href: "/listing-stay",
    name: "Abbayithu Ammayi",
    taxonomy: "category",
    thumbnail: Abbayithu_Ammayi
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "Vastuprakara",
    taxonomy: "category",
    thumbnail: Vastuprakara
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Yamaleela II",
    taxonomy: "category",
    thumbnail: Yamaleela
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "Rough",
    taxonomy: "category",
    thumbnail: Rough
  },
];

const ListingTourPage: FC<ListingStayPageProps> = ({ className = "" }) => {
  /*  const [packages, setPackages] = useState<any>([]);
   console.log('........................packages',packages)
 
   const getPackageData = async () => {
     const response = await getAllPackages()
     if (response.data) {
       let tempData: any = [];
       if (response.data.response === "success") {
         response.data.packages.map((item: any, key: number) => {
           tempData[key] = {
             id: item.id,
             href: "#",
             name: item.name,
             country: item.country,
             days: item.days,
             image:item.image,
             description: item.description,
             taxonomy: "category",
             count: 188288,
           }
         })
         setPackages(tempData)
       }
 
     }
   }
   useEffect(() => {
     getPackageData()
   }, []) */
  return (
    <div
      className={`nc-ListingStayPage relative overflow-hidden ${className}`}
      data-nc-id="ListingStayPage"
    >
      <Helmet>
        <title>FILM PRODUCTION || EUROPE TOURS & TRAVELS</title>
      </Helmet>
      <BgGlassmorphism />

      <div className="container relative overflow-hidden">
        {/* SECTION HERO */}
        <SectionHeroArchivePage
          currentPage="Stays"
          currentTab="One-way"
          className="pt-10 pb-24 lg:pb-28 lg:pt-16 "
        />
        {/* SECTION */}
        <div
          className={`nc-SectionGridFilterCard ${className}`}
          data-nc-id="SectionGridFilterCard"
        >
          <Heading3 />
          <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {DEMO_CATS.map((stay) => (
              <div className={`nc-StayCard group relative bg-white dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 rounded-2xl overflow-hidden will-change-transform hover:shadow-xl transition-shadow ${className}`} data-nc-id="StayCard">
                <div className="relative w-full">
                  <div className={`nc-GallerySlider ${className}`} data-nc-id="GallerySlider">
                    <div className={`relative group overflow-hidden`}>
                      <div className="glide__track" data-glide-el="track">
                        <ul className="glide__slides">
                          <li className="glide__slide">
                            <div className="relative flex-shrink-0 w-full h-60 overflow-hidden">
                              <NcImage src={stay.thumbnail} containerClassName="absolute inset-0 " />
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"p-4 space-y-4"}>
                  <div className="space-y-2">
                    <div className="items-center space-x-2">
                      <h2
                        className={` font-medium capitalize text-lg`}
                      >
                        <span className="line-clamp-1 text-center">{stay.name}</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex mt-16 justify-center items-center">
            {/* <Pagination /> */}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ListingTourPage;
