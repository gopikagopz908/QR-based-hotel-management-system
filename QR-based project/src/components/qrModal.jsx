import React from "react";

const ImageModal = ({ imageUrl,  onClose }) => {
    console.log(imageUrl)
  

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-xl max-w-[90%] max-h-[90%] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
        >
          &times;
        </button>
        <img
          src={imageUrl}
          alt="Preview"
          className="max-h-[80vh] max-w-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
};

export default ImageModal;
