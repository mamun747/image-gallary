"use client";
import Card from "./card";
import { data } from "@/lib/db";
import { useSearchParams } from "next/navigation";
import Popup from "./popup";
import { IImage, Tcategory } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Gallery = () => {
  const [images, setImages] = useState<IImage[]>([]);
  const params = useSearchParams();
  const category = params.get("category");
  const search = params.get("search");
  const popup = params.get("popup") ? true : false;
  const route = useRouter();
  const close = () => route.push("/");
  useEffect(() => {
    const filtered = data.filter((item) =>
      search
        ? item.name.toLowerCase().includes(search.toLocaleLowerCase())
        : category
        ? item.category === category
        : true
    );
    setImages(filtered);
  }, [category, search]);
  const addNewImage = (name: string, category: Tcategory, file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const imgId = images.length.toString();
      const newImage = {
        id: imgId,
        name,
        category,
        url: e.target?.result as string,
        likes: 0,
        shares: 0,
      };
      setImages((prev) => ([...prev, newImage]));
      close();
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="pt-10 grid grid-cols-3 gap-6">
      {popup && <Popup submit={addNewImage} close={close}/>}
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
