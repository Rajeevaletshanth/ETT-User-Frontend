import React, { FC } from "react";
import NcImage from "shared/NcImage/NcImage";
import { TaxonomyType } from "data/types";
import { Link } from "react-router-dom";
import './../../styles/style.css'
//import convertNumbThousand from "utils/convertNumbThousand";

export interface CardCategory5Props {
  className?: string;
  taxonomy: TaxonomyType;
}

const CardCategory5: FC<CardCategory5Props> = ({
  className = "",
  taxonomy,
}) => {
  const {name, href = "/", thumbnail } = taxonomy;
  return (
    <Link
      to={href}
      className={`nc-CardCategory5 flex flex-col ${className}`}
      data-nc-id="CardCategory5"
    >
      <div
        className={`flex-shrink-0 relative w-full aspect-w-4 aspect-h-3 h-0 rounded-2xl overflow-hidden group bg`}
      >
        <NcImage
          src={thumbnail}
          className="object-cover w-full h-full rounded-2xl"
        />
        <span className="opacity textAlgin group-hover:opacity-100 absolute inset-0 bg-black bg-opacity-10 transition-opacity">
        <b>{name}</b>
        </span>
      </div>
      <div className="mt-4 px-3 truncate">
        <h2
          className={`text-base sm:text-lg text-neutral-900 dark:text-neutral-100 font-medium truncate textAlgin`}
        >
        </h2>
      </div>
    </Link>
  );
};

export default CardCategory5;
