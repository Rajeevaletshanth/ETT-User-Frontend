import React, { FC } from "react";
import { PathName } from "routers/types";

interface Props {
  href?: PathName;
}

const BookingSubmit: FC<Props> = () => {
  return (
    <button
      type="submit"
      className="h-14 md:h-16 w-full md:w-16 rounded-full bg-primary-6000 hover:bg-primary-700 flex items-center justify-center text-neutral-50 focus:outline-none"
    >
      <span className="mr-3 md:hidden">Submit</span>
      <i className="las la-arrow-right text-xl"></i>
    </button>
  );
};

export default BookingSubmit;
