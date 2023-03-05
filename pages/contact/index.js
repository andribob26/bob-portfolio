import React, { useEffect } from "react";
import Link from "next/link";
import { SiWhatsapp, SiGmail, SiLinkedin } from "react-icons/si";
import { MdLocationOn } from "react-icons/md";
import { useGeolocated } from "react-geolocated";
import dynamic from "next/dynamic";
const MapWithNoSSR = dynamic(() => import("../../components/Map"), {
  ssr: false,
});

const ContactPage = () => {
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });


  return (
    <div id="contact" className="px-2 py-6 lg:px-36 lg:py-10">
      <h1 className="title-contact-el text-4xl font-bold mb-6">
        Hubungi <span className="text-my-primary">Saya</span>
      </h1>
      <div className="flex flex-col lg:flex-row">
        <div className="text-contact-el text-sm  text-my-black-light dark:text-my-white lg:pr-8">
          {/* <p className="mb-3 text-justify indent-6">{textAbout}</p> */}
          <p className="mb-3 text-justify indent-6">
            Saya terbuka untuk freelance, kontrak, atau pekerjaan penuh waktu,
            jika kamu memiliki permintaan atau pertanyaan, jangan sungkan untuk
            menghubungi saya
          </p>
          <ul className="grid grid-cols-1 gap-2 mb-3 text-my-black-light dark:text-my-white">
            <li className="flex items-center ">
              <SiWhatsapp className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`https://wa.me/0881023284544`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                0881-0232-84544
              </Link>
            </li>
            <li className="flex items-center">
              <SiLinkedin className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`https://www.linkedin.com/in/andri-febrian-6194521ba/?originalSubdomain=id`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                Andri Febrian
              </Link>
            </li>
            <li className="flex items-center">
              <SiGmail className="text-my-primary mr-2" />
              <Link
                className="hover:text-my-primary transition-all duration-300 ease-out"
                href={`mailto:andri.feb.26@gmail.com`}
                target={`_blank`}
                rel={`noopener noreferrer`}
              >
                andri.feb.26@gmail.com
              </Link>
            </li>
            <li className="flex items-center">
              <MdLocationOn className="text-my-primary mr-2" />
              Blok Wagir, Kec. Gantar, Kab. Inadramayu, Indonesia
            </li>
          </ul>
        </div>
        <div className="map-contact-el lg:w-1/2 flex justify-center items-center mt-4 lg:mt-0">
          <div className="relative w-64 rounded shadow-lg">
            <MapWithNoSSR coords={coords} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
