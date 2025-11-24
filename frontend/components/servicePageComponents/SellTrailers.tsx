import Link from "next/link";

const SellTrailers= () => {

  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-t-2 border-jblue border-b-2">
          <ul>
            <li className="text-left  mb-4">
              <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                Sell Your Trailers to Javco
              </h2>
              <ul>
                <li className="ml-6 text-gray-600">
                  - Thinking of selling your trailer? Javco is always looking for quality inventory at a fair price. Whether you want to trade-in or just downsize your fleet, we'll make the process easy and pain-free. Tell us what you have
                  <Link
                    className="underline font-semibold text-jblue"
                    href="mailto:info@javco.co?subject=Javco Inquiry For Selling Trailer"
                  >
                    {" by sending us an email."}
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
