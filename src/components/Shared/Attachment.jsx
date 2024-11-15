import React, { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { getStoredCart } from "../../utilities/function";

const Attachment = ({
  image,
  setImage,
  responseMessage,
  setResponseMessage,
  handleFileChange,
}) => {
  const removeImage = () => {
    setImage(null); // Clear the selected file
  };

  return (
    <div className="w-full">
      <button className="w-full bg-gray-400 text-white p-2 rounded-xl flex justify-center items-center gap-2 relative font-bold">
        <IoArrowUpCircleOutline className="text-2xl rounded-full" />
        <span>Attachment</span>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*" // Limit to image files
          className="absolute inset-0 opacity-0 cursor-pointer"
          required
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

      {responseMessage && (
        <div className="mt-2 text-green-500">{responseMessage}</div>
      )}
    </div>
  );
};

export default Attachment;
