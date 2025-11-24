import Link from "next/link";

const SalesSection= () => {

  return (
    <section className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-t-2 border-jblue border-b-2">
          <ul>
            <li className="text-left  mb-4">
              <h2 className="font-bold text-xl mb-2 mt-2 text-jblue">
                Buy Trailers
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
                    Call
                  </Link>
                  {" or "}
                  <Link
                    className="text-jblue underline"
                    href="mailto:info@javco.co?subject=Javco Inquiry"
                  >
                    
                    email
                  </Link>
                  {" NOW and ask about our current inventory! "}
                  <Link className="text-jblue underline" href={"/inventory"}>
                    Or check out our inventory now online.
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
