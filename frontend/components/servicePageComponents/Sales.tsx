import React from "react";
import Link from "next/link";

interface SalesSectionProps {
  parsedText: any;
}

const SalesSection: React.FC<SalesSectionProps> = ({ parsedText }) => {
  const salesSectionText = parsedText.text.Sales_Page;
  const buySection = salesSectionText.Buy_Trailers_Section;

  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-t-2 border-jblue border-b-2">
          <ul>
            <li className="text-left  mb-4">
              <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                {buySection.Section_Header}
              </h2>
              <ul>
                <li className="ml-6 text-gray-600">
                  {
                    "- Get the right trailer for the right price! Javco is a licensed dealer of used dry vans, reefers, flatbed, and tanker trailers. "
                  }
                  <Link
                    className="text-jblue underline"
                    href="tel:+12628359400"
                  >
                    {" "}
                    {buySection.Link_To_Phone}
                  </Link>{" "}
                  {buySection.Filler_Between_Links}
                  <Link
                    className="text-jblue underline"
                    href="mailto:info@javco.co?subject=Javco Inquiry"
                  >
                    {" "}
                    {buySection.Link_To_Email}
                  </Link>{" "}
                  {`${buySection.Text_Before_Inventory_Link} `}
                  <Link className="text-jblue underline" href={"/inventory"}>
                    {buySection.Inventory_Link_Text}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SalesSection;
