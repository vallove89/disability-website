import React from "react";
import Image from "next/image";

const CardItemWithPhoto = ({ title, description, url }) => {
  return (
        <div className="max-w-lg rounded overflow-hidden shadow-lg my-16">
            <Image
                className="w-full"
                src={url}
                alt="Sunset in the mountains"
                width={1000}
                height={600}
                layout="intrinsic"
            />
            <div className="px-6 py-4">
                <h4 className="font-bold text-xl mb-2 text-blue-500">{title}</h4>
                <p className="text-gray-700 text-base text-blue-900">
                    {description}
                </p>
            </div>
        </div>
  );
};

export default CardItemWithPhoto;