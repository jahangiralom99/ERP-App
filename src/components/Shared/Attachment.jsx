import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowUpCircleOutline } from "react-icons/io5";

const Attachment = () => {
  // image
  const [image, setImage] = useState("");

  // Attachment file
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  // Attachment file remove
  const removeImage = () => {
    setImage(null);
  };

  return (
    <div className="w-full">
      <button className="w-full bg-gradient-to-r from-black to-[#FF0000] text-white p-2 rounded-xl flex justify-center items-center gap-2 relative font-bold">
        <IoArrowUpCircleOutline className="text-2xl  rounded-full" />
        <span>Attachment</span>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*" // Limit to image files
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </button>
      {image && (
        <div className="flex bg-white mt-4 flex-col items-center border border-gray-300 rounded-full p-3 gap-2 w-full">
          <div className="flex justify-between items-center w-full font-bold px-3">
            <span className="truncate text-sm">{image.name}</span>
            <button
              className="text-red-500 hover:text-red-700"
              onClick={removeImage}
            >
              <IoMdCloseCircleOutline className="text-xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Attachment;
