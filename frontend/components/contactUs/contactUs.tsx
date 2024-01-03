import { MapPinIcon } from "lucide-react";

const ContactUs: React.FC = () => {

    return (
        <div className="text-jblue border-t-4 border-jblue flex flex-col md:flex-row items-center justify-center rounded-t">
          <div className="font-semibold md:mr-4">
            <a href="tel:+12628359400">Phone: 262-835-9400</a>
          </div>
          <div className="font-semibold md:mr-4">
            Email: <a href="mailto:info@javco.co?subject=Javco Inquiry">info@javco.co</a>
          </div>
          <div className="flex flex-row justify-center gap-2 mb-2 mt-2 bg-jblue text-white p-2 rounded shadow-lg shadow-xl w-36">
            <a
              href="https://www.google.com/maps/place/Javco/@42.7770913,-87.9577285,18z/data=!4m10!1m2!2m1!1sjavco!3m6!1s0x88056e9f83ef8f35:0xe48743b24e89655e!8m2!3d42.7756897!4d-87.9554314!15sCgVqYXZjb1oHIgVqYXZjb5IBDnRyYWlsZXJfZGVhbGVy4AEA!16s%2Fg%2F1tx_6yhb?entry=ttu"
            >
              Go to Maps
            </a>
            <MapPinIcon />
          </div>
        </div>
      );
}

export default ContactUs;