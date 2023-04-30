import React, { FC, useEffect, useMemo } from "react";
import Heading from "components/Heading/Heading";
import Glide from "@glidejs/glide";
import { TaxonomyType } from "data/types";
import NextPrev from "shared/NextPrev/NextPrev";
import CardCategory5 from "components/CardCategory5/CardCategory5";
import useNcId from "hooks/useNcId";

export interface SectionSliderNewCategoriesProps {
  className?: string;
  itemClassName?: string;
  heading?: string;
  subHeading?: string;
  categories?: TaxonomyType[];
  categoryCardType?:"card5";
  itemPerRow?: 4 | 5;
  sliderStyle?: "style1" | "style2";
  uniqueClassName: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay",
    name: "Airport Assistance",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/6.90d53f8dfe2ef8786062.png",
  },
  {
    id: "2",
    href: "/listing-stay",
    name: "VVIP Services",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/10.2c3985c1c385710ec87f.png",
  },
  {
    id: "3",
    href: "/listing-stay",
    name: "VIP Services",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/12.f5b70b460afeaf0fa9d5.png",
  },
  {
    id: "4",
    href: "/listing-stay",
    name: "Assistance",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/10.2c3985c1c385710ec87f.png",
  },
  {
    id: "5",
    href: "/listing-stay",
    name: "Assistance",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/5.4f8ec5d5e695a6507109.png",
  },
  {
    id: "6",
    href: "/listing-stay",
    name: "Assistance",
    taxonomy: "category",
    thumbnail:
      "http://localhost:3000/static/media/5.4f8ec5d5e695a6507109.png",
  },
];

const SectionSliderNewCategories1: FC<SectionSliderNewCategoriesProps> = ({
  heading = "Tourism Countries",
  subHeading = "Tourism is travel for pleasure or business.",
  className = "",
  itemClassName = "",
  categories = DEMO_CATS,
  itemPerRow = 5,
  categoryCardType = "card3",
  sliderStyle = "style1",
  uniqueClassName,
}) => {
  const UNIQUE_CLASS =
    "SectionSliderNewCategories__" + uniqueClassName + useNcId();

  let MY_GLIDEJS = useMemo(() => {
    return new Glide(`.${UNIQUE_CLASS}`, {
      perView: itemPerRow,
      gap: 32,
      bound: true,
      breakpoints: {
        1280: {
          perView: itemPerRow - 1,
        },
        1024: {
          gap: 20,
          perView: itemPerRow - 1,
        },
        768: {
          gap: 20,
          perView: itemPerRow - 2,
        },
        640: {
          gap: 20,
          perView: itemPerRow - 3,
        },
        500: {
          gap: 20,
          perView: 1.3,
        },
      },
    });
  }, [UNIQUE_CLASS]);

  useEffect(() => {
    setTimeout(() => {
      MY_GLIDEJS.mount();
    }, 100);
  }, [MY_GLIDEJS, UNIQUE_CLASS]);

  const renderCard = (item: TaxonomyType, index: number) => {
    switch (categoryCardType) {
      case "card5":
        return <CardCategory5 taxonomy={item} />;
      default:
        return <CardCategory5 taxonomy={item} />;
    }
  };

  return (
    <div className={`nc-SectionSliderNewCategories ${className}`}>
      <div className={`${UNIQUE_CLASS} flow-root`}>
        <Heading
          desc={subHeading}
          hasNextPrev={sliderStyle === "style1"}
          isCenter={sliderStyle === "style2"}
        >
          {heading}
        </Heading>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {categories.map((item, index) => (
              <li key={index} className={`glide__slide ${itemClassName}`}>
                {renderCard(item, index)}
              </li>
            ))}
          </ul>
        </div>

        {sliderStyle === "style2" && (
          <NextPrev className="justify-center mt-16" />
        )}
      </div>
    </div>
  );
};

export default SectionSliderNewCategories1;
