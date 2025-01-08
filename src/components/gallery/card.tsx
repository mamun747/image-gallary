import React, { FC } from "react";
import Image from "next/image";
import { SaveIcon } from "./icons";
import { IImage } from "@/types";

const Card: FC<IImage> = (props) => {
  const { name, url, likes, shares }  = props || {};
  return (
    <figure className="w-fit relative group overflow-hidden rounded-md">
  <Image
    alt={name}
    src={url}
    width={400}  // Fixed width
    height={400} // Fixed height
    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-200"
  />
  <figcaption className="w-full p-3 bg-slate-900/30 text-white flex justify-between items-center gap-1.5 absolute -bottom-20 left-0 invisible group-hover:bottom-0 group-hover:visible transition-all duration-200">
    <div className="space-y-2">
      <p className="text-lg font-semibold">{name}</p>
      <p className="text-sm">
        {likes} likes | {shares} shares
      </p>
    </div>
    <SaveIcon />
  </figcaption>
</figure>

  );
};

export default Card;
