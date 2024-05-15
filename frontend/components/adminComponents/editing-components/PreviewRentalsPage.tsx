import React from "react";
import "../../../app/globals.css";
import RentalsSection from "@/components/servicePageComponents/Rentals";

interface RentalsPagePreviewProps {
  previewText: any;
}

const RentalsPagePreview: React.FC<RentalsPagePreviewProps> = ({
  previewText,
}) => {
  return (
    <>
      <div className="w-full bg-white p-2 flex justify-center text-center">
        <h1 className={`text-jblue text-4xl font-bold mb-2`}>
          {previewText.text.Rentals_Page.Main_Header}
        </h1>
      </div>
      <div className="border-b-2 border-jblue">
        <RentalsSection parsedText={previewText} />
      </div>
    </>
  );
};

export default RentalsPagePreview;
