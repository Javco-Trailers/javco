import React from "react";
import Link from "next/link";

interface SellTrailerProps {
  parsedText: any;
}

const SellTrailers: React.FC<SellTrailerProps> = ({ parsedText }) => {
  const salesSectionText = parsedText.text.Sales_Page;
  const sellSection = salesSectionText.Sell_Your_Trailer_Section;
  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-t-2 border-jblue border-b-2">
          <ul>
            <li className="text-left  mb-4">
              <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                {sellSection.Section_Header}
              </h2>
              <ul>
                <li className="ml-6 text-gray-600">
                  {sellSection.Text_Before_Email_Link}
                  <Link
                    className="underline font-semibold text-jblue"
                    href="mailto:info@javco.co?subject=Javco Inquiry For Selling Trailer"
                  >
                    {sellSection.Link_To_Email}
                  </Link>{" "}
                  .
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SellTrailers;
