import { Tcategory } from "@/types";
import React, { FC, useState } from "react";

interface Props {
  submit: (name: string, category: Tcategory, file: File) => void;
  close: () => void
}
export const Popup: FC<Props> = ({ submit, close }) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState<"photo" | "vector">("photo");
  const [file, setFile] = useState<File | null>(null);
  
  const handleSubmit = () => {
    if(name && category && file) submit(name, category as Tcategory, file);
    setName('');
    setCategory('photo');
    setFile(null)
  }
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center absolute top-0 left-0 bg-slate-900/50 z-50">
        <div className="w-full max-w-md bg-slate-100 p-5 rounded space-y-2.5">
          <div className="flex justify-between items-center gap-2.5">
            <h1>Add new Image</h1>
            <button
              className="active:translate-y-0.5 text-red-500 text-4xl"
              onClick={close}
            >
              x
            </button>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            className="w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
          <select
            name=""
            id=""
            className="w-full py-2 px-4 bg-slate-100 border-2 border-slate-400 focus:outline-none text-slate-500 rounded"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Photo">Photo</option>
            <option value="Vector">Vector</option>
          </select>
          <button
            className="w-full py-2.5 px-4 bg-slate-800 focus:outline-none text-slate-100 rounded-md font-semibold active:translate-y-0.5"
            onClick={handleSubmit}
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default Popup;
