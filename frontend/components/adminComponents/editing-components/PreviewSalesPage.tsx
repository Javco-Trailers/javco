import "../../../app/globals.css";
import SalesSection from "@/components/servicePageComponents/Sales";
import SellTrailers from "@/components/servicePageComponents/SellTrailers";
import Image from "next/image";
import Reefer from "@/public/ReeferVan-min.png";
import DryVan from "@/public/DryVanForSales-min.png";

interface PreviewSalesPageProps {
  previewText: any;
}

const PreviewSalesPage: React.FC<PreviewSalesPageProps> = ({ previewText }) => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="w-full bg-white p-2 h-1/5 text-center">
          <h1 className={`text-jblue text-4xl font-bold mb-2`}>Sales</h1>
        </div>
        <div className="flex flex-col p-4 justify-around md:flex-row">
          <Image
            src={Reefer.src}
            height={400}
            width={500}
            alt="Picture of a red truck pulling a reefer trailer"
            loading="lazy"
          />
          <Image
            src={DryVan.src}
            height={400}
            width={500}
            alt="Picture of a blue truck pulling a dry van trailer"
            loading="lazy"
          />
        </div>
        <div className="border-b-2 border-jblue">
          <SalesSection parsedText={previewText} />
        </div>

        <div className="border-b-2 border-jblue">
          <SellTrailers parsedText={previewText} />
        </div>
      </div>
    </>
  );
};

export default PreviewSalesPage;
