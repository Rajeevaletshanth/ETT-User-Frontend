import React, { FC } from "react";
import rightImg from "images/about1.jpg";
import rightImg1 from "images/about2.jpg";
import rightImg2 from "images/about3.jpg";
import NcImage from "shared/NcImage/NcImage";
import Badge from "shared/Badge/Badge";

export interface SectionAboutusProps {
  className?: string;
}

const SectionAboutus: FC<SectionAboutusProps> = ({ className = "" }) => {
  return (
    <>
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Professional Services</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
        Europe Tours & Travels are ground handlers and take care of all aspects of travel bookings, including hotels, guesthouses, apartments, transport, car hire, coach hire, sightseeing, special interest travel, FIT and group travel, sport tours and conferences
        <br/>
        All aspects of the bookings are custom made specially for your clients, and we offer services for both the leisure and corporate market. Think of us as your ‘One Stop Travel Shop,’where the service is always excellent.
        </span>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg} className="hightImgCover" />
      </div>
    </div>
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">We got you covered!</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
        Our strong relationships with Inbound and Outbound Travel Agents are testament to our professionalism. We always include the extras that make a trip so special, in-cluding sightseeing tickets, dinner reservations and thea-tre tickets. Our staff are all travel specialists and will look after you, the Travel Agent, from start to finish.
        <br/>
        At Europe Tours & Travels we offer 24 hour support to you, the Agent, and to your clients. Our staff members will always be on hand to take your bookings, for last minute bookings and for changes to existing bookings. Call or email one of our staff members for a custom made itinerary.
        <br/>
        We are competitively priced with our large buying power throughout Europe and only work with the best and most professional people in the travel industry.
       </span>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg1} className="hightImgCover" />
      </div>
    </div>
    <div
      className={`nc-SectionSubscribe2 relative flex flex-col lg:flex-row lg:items-center ${className}`}
      data-nc-id="SectionSubscribe2"
    >
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mr-10 lg:w-2/5">
        <h2 className="font-semibold text-4xl">Why choose us?</h2>
        <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
       </span>
        <ul className="space-y-4 mt-10">
          <li className="flex items-center space-x-4">
            <Badge name="01" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Offer you one platform where you can book all your travel arrangements.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="02" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Ensure you are getting the best partners in Europe, re-garding all aspects of the travel booking.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="03" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Respond immediately with confirmations, invoices, vouchers and /or the itinerary.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="04" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Provide reference numbers and contact details for all aspect of the booking.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="05" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Keep on top of travel trends
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="06" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Offer you, the Travel Agent, the best possible prices and competitive service.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="07" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Safeguard you, the Travel Agent, as you are and always will be our primary clients.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="08" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Grow our business and our range of travel services.
            </span>
          </li>
          <li className="flex items-center space-x-4">
            <Badge color="red" name="09" />
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
            Be your ‘One Stop Travel Shop.
            </span>
          </li>
        </ul>
      </div>
      <div className="flex-grow">
        <NcImage src={rightImg2} className="hightImgCover" />
      </div>
    </div>
    </>
  );
};

export default SectionAboutus;
