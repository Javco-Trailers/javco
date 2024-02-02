import { MapPinIcon, PhoneCallIcon, Mail } from "lucide-react";

const ContactUs: React.FC = () => {

  return (
      <div className="text-jblue border-t-4 border-jblue flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-row font-semibold md:mr-4">
          <a className="flex flex-row mt-2 md:mt-0 mb-2 md:mb-0 p-2" href="tel:+12628359400">
            <PhoneCallIcon /> Phone: 262-835-9400
          </a>
        </div>
        <div className="flex flex-row font-semibold md:mr-4">
          <a className="flex flex-row mb-2 md:mb-0 p-2" href="mailto:info@javco.co?subject=Javco Inquiry">
            <Mail /> Email: info@javco.co
          </a>
        </div>
        <div className="flex flex-row font-semibold">
          <a
            className="flex flex-row mb-2 text-center md:mb-0 p-2"
            href="https://www.google.com/maps/place/Javco/@42.7770913,-87.9577285,18z/data=!4m10!1m2!2m1!1sjavco!3m6!1s0x88056e9f83ef8f35:0xe48743b24e89655e!8m2!3d42.7756897!4d-87.9554314!15sCgVqYXZjb1oHIgVqYXZjb5IBDnRyYWlsZXJfZGVhbGVy4AEA!16s%2Fg%2F1tx_6yhb?entry=ttu"
          >
            <MapPinIcon /> 3873 S. 27th St Franksville, WI 53126
          </a>
        </div>
      </div>
    );
    
  }  

export default ContactUs;