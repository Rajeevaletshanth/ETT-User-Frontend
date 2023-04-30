import Heading from "components/Heading/Heading";
import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import HIW1img from "images/HIW1.png";
import HIW2img from "images/HIW2.png";
import HIW3img from "images/HIW3.png";
//import VectorImg from "images/VectorHIW.svg";
import businessTravel from "images/serviceImgs/Business Travel.jpg";
import eventManagement from "images/serviceImgs/EVENT MANAGEMENT.jpg";
import filmLineProduction from "images/serviceImgs/FILM LINE PRODUCTION.jpg";
import hotelBookings from "images/serviceImgs/hotel.jpg";
import transportations from "images/serviceImgs/Transportaton.jpg";
import apartments from "images/serviceImgs/apartments.jpg";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: string;
    imgDark?: string;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: businessTravel,
    title: "Business Travel",
    desc: "We have a special understanding of the corporate market. Your client will be looked after from start to finish, including the hotel, transport and any dinners or meeting rooms / conferences that need to be arranged.",
  },
  {
    id: 2,
    img: eventManagement,
    title: "Event Management",
    desc: "If your client is planning a conference, a wedding, a yoga retreat or a school tour, we can make all the arrangements for you. Our staff have the expertise and contacts for all special events and special interest tours.",
  },
  {
    id: 3,
    img: filmLineProduction,
    title: "Film Line Production",
    desc: "As with all our special interest tours. We are doing film line production also, We have contacts all over the Europe regarding locations and permits, staff and catering. We will be delighted to help your Project.",
  },
  {
    id: 4,
    img: transportations,
    title: "Transportations",
    desc: "We have partnerships and connections with private drivers and guides all over Europe. Whether you want an airport transfer, a half-day or a full day driver at your disposal, we can arrange it.",
  },
  {
    id: 5,
    img: hotelBookings,
    title: "Hotel Bookings",
    desc: "We manage and book all aspects of accommodation and have excellent buying power with deluxe hotels, boutique hotels, Whether you want one night or one month, have an FIT booking or a group booking, we will be delighted to handle the arrangements for you. And our rates will always be competitive.",
  },
  {
    id: 6,
    img: apartments,
    title: "Apartments",
    desc: "If you are looking for a long stay for your clients, have business travellers or a family, we have an excellent range of apartments, ranging from studios to penthouses. Catered, or self catering, we will handle these arrangements for you.",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
    <div
      className={`nc-SectionHowItWork  ${className}`}
      data-nc-id="SectionHowItWork"
    >
      <Heading isCenter desc="What we do">
        Services
      </Heading>
      <div className="mt-20 relative grid md:grid-cols-3 gap-20">
        {/* <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        /> */}
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            <div className="relative flex-shrink-0 w-96 h-60 md:rounded-xl overflow-hidden">
              <NcImage src={item.img} containerClassName="absolute inset-0 " />
            </div>
            <div className="text-center mx-auto mt-3 md:mt-5">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionHowItWork;
