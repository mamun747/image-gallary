"use client";
import Card from "./card";
import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";

const Gallery = () => {
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");

  const images = data.filter(
    (item) =>
      (search
        ? item.name.toLowerCase().includes(search.toLocaleLowerCase())
        : category ? item.category === category : true)
  );
  return (
    <div className="pt-10 grid grid-cols-3 gap-6">
      {images.length > 0 ? (
        images.map((item) => <Card key={item.id} {...item} />)
      ) : (
        <h2 className="text-slate-500 font-semibold font-mono text-center col-span-3 text-3xl pt-3">
          Data is not found
        </h2>
      )}
    </div>
  );
};

export default Gallery;
