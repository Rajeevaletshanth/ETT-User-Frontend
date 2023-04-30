import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import React, { FC,useState,useEffect } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";
import { Helmet } from "react-helmet";
import { getAllPackages } from "services/apiServices";

export interface ListingStayPageProps {
  className?: string;
}

const ListingTourPage: FC<ListingStayPageProps> = ({ className = "" }) => {
  const [packages, setPackages] = useState<any>([]);
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
  }, [])
  return (
    <div
      className={`nc-ListingStayPage relative overflow-hidden ${className}`}
      data-nc-id="ListingStayPage"
    >
      <Helmet>
        <title>TOUR || EUROPE TOURS & TRAVELS</title>
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
        {packages.length > 0 &&
        <SectionGridFilterCard className="pb-24 lg:pb-28" />}
      </div>
    </div>
  );
};

export default ListingTourPage;
