import React from "react";
import ImageWithOverlay from "../imageWithOverlay/ImageWithOverlay";
import lot from "../../public/Picture-1-WhatsApp-edited.jpg";
import Link from "next/link";

const SalesSection = () => {
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
      <h1 className={`text-jblue text-4xl font-bold mb-2`}>Sales</h1>
        <div className="font-semibold m-4 p-4">
          <p className="text-left text-gray-600">
            - Get the right trailer for the right price! Javco is a licensed
            dealer of used dry vans, reefers, flatbed, and tanker trailers.
            <Link className="text-jblue" href="tel:+12628359400">
              {" "}
              <u>Call</u>
            </Link>{" "}
            or
            <Link
              className="text-jblue"
              href="mailto:info@javco.co?subject=Javco Inquiry"
            >
              {" "}
              <u>email</u>
            </Link>{" "}
            NOW and ask about our current inventory!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
