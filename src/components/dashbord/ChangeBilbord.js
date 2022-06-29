import React from "react";

const images = [
  {
    id: 1,
    url: "https://works-galleries.s3.amazonaws.com/fashion/Qishm/qishm16.jpg",
    title: "Qishm",
    alt: "image",
  },
  {
    id: 2,
    url: "https://works-galleries.s3.amazonaws.com/advertisment/Belle_de_jour/belle_de_jur1.jpg",
    title: "Belle De jour",
    alt: "image",
  },
  {
    id: 3,
    url: "https://works-galleries.s3.amazonaws.com/fashion/Kan/kan1.jpg",
    title: "Kan",
    alt: "image",
  },
  {
    id: 4,
    url: "https://works-galleries.s3.amazonaws.com/fashion/Avina/avina1.jpg",
    title: "Avina",
    alt: "image",
  },
];

const ChangeBilbord = () => {
  return (
    <div
      className="w-4/5 h-full rounded-xl flex "
      style={{ backgroundColor: "#d6d9db", overflow: "hidden" }}
    >
      {images.map((image) => {
        return (
          <div className="w-1/4 h-full">
            <img
              src={image.url}
              alt={image.alt}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ChangeBilbord;
