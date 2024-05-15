import React from "react";
import Link from "next/link";
import Image from "next/image";
import DryVanInside from "../../public/DryVanInside-min.jpg";
import DryVansLinedUp from "../../public/dryvansatdock-min.jpg";

interface RentalSectionsProp {
  parsedText: any;
}

const RentalsSection: React.FC<RentalSectionsProp> = ({ parsedText }) => {
  const rentalsSectionText = parsedText.text.Rentals_Page;
  const storageSectionText = rentalsSectionText.Storage_Section;
  const cartageSectionText = rentalsSectionText.Cartage_Section;
  const industriesWeServeText = rentalsSectionText.Industries_We_Serve;

  return (
    <section className="bg-gray-100 p-8">
      <div className="flex flex-col h-1/6 p-4 justify-around md:flex-row">
        <Image
          className="p-2"
          src={DryVanInside.src}
          height={200}
          width={300}
          alt="Picture of the interior of a dry van"
          loading="lazy"
        />
        <Image
          className="p-2"
          src={DryVansLinedUp.src}
          height={200}
          width={600}
          alt="Picture of Dry Vans lined up at the docks"
          loading="lazy"
        />
      </div>
      <div className="max-w-3xl mx-auto text-center">
        <div className="m-4 p-4">
          <p className="text-left font-bold mb-4 text-black">
            {rentalsSectionText.Text_Under_Photo}
          </p>
          <div className="border-t-2 border-jblue border-b-2">
            <ul>
              <li className="text-left  mb-4">
                <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                  {storageSectionText.Section_Header}
                </h2>
                <ul>
                  <li className="ml-6 text-gray-600">
                    {storageSectionText.Section_Paragraph_Before_Link_1}
                    <Link className="text-jblue" href="tel:+12628359400">
                      {" "}
                      <u>{storageSectionText.Link_One_Text}</u>
                    </Link>{" "}
                    {storageSectionText.Filler_Between_Texts}
                    <Link
                      className="text-jblue"
                      href="mailto:info@javco.co?subject=Javco Inquiry"
                    >
                      {" "}
                      <u>{storageSectionText.Link_Two_Text}</u>
                    </Link>{" "}
                    {storageSectionText.Ending_Text}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="text-left">
                <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                  {cartageSectionText.Section_Header}
                </h2>
                <ul className="ml-6 text-gray-600">
                  {cartageSectionText.Section_Paragraph}
                </ul>
              </li>
            </ul>
          </div>
          <div className="flex justify-start items-start">
            <a
              className="text-jblue underline"
              href={"/creditApplication.pdf"}
              target="_blank"
              download
            >
              {rentalsSectionText.Credit_Application_Text}
            </a>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-black">
            {industriesWeServeText.Section_Header}
          </h3>
          <ul className="text-lg text-gray-600 list-disc">
            {industriesWeServeText.List_Items.map(
              (listItem: string, index: number) => {
                return (
                  <li className="list-none" key={`list-for-industries${index}`}>
                    {listItem}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RentalsSection;
