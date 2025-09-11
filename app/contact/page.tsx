import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { mulish } from "../ui/fonts";
import Banner from "../ui/Banner";

export default function page() {
  return (
    <main className="">
      <Banner />

      <section className="relative w-full py-10 px-25">
        <h2 className="text-black text-2xl sm:text-4xl font-medium text-center">
          Get in Touch
        </h2>
        <p className={`${mulish.className} text-regent-gray-800 text-center`}>
          For business enquiries, project discussions, or to learn more about
          our services, Feel free to contact us.
        </p>
        <div className="relative grid grid-cols-[2fr_1fr] grid-rows-[1fr_1fr] gap-5 my-5">
          <div className="p-10 border text-regent-gray-950 border-regent-gray-400 row-start-1 row-end-3 rounded-2xl shadow-md">
            <h3 className="mb-5 text-2xl font-bold">Drop Your Message</h3>
            <form>
              <div className={`${mulish.className} formBox relative w-full`}>
                <div className="row50 flex gap-5">
                  <div className="inputBox flex flex-col w-full mb-2.5">
                    <span className="mt-2.5 mb-1 font-medium">Name</span>
                    <input
                      type="text"
                      className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                      placeholder="Enter your Full name"
                    />
                  </div>
                </div>

                <div className="row50 flex gap-5">
                  <div className="inputBox flex flex-col w-[50%] mb-2.5">
                    <span className="mt-2.5 mb-1 font-medium">Email</span>
                    <input
                      type="email"
                      className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                      placeholder="Enter your email address"
                    />
                  </div>
                  <div className="inputBox flex flex-col w-[50%] mb-2.5">
                    <span className="mt-2.5 mb-1 font-medium">Mobile</span>
                    <input
                      type="text"
                      className="p-2.5 outline-0 border border-regent-gray-300 rounded-lg"
                      placeholder="Enter your Mobile number"
                    />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox w-full flex flex-col mb-2.5">
                    <span className="mt-2.5 mb-1 font-medium">Message</span>
                    <textarea
                      className="p-2.5 border border-regent-gray-300 outline-0 resize-none min-h-55 mb-2.5 rounded-lg"
                      placeholder="Write your message here..."
                    ></textarea>
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox w-full flex flex-col mb-2.5">
                    <input
                      type="submit"
                      value="Send"
                      className="bg-tall-poppy-700 border-0 text-white text-[1.1em] cursor-pointer py-3.5 px-4 max-w-30 font-medium rounded-4xl hover:rounded-lg transition-[border-radius] duration-400 ease"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className="p-10 bg-regent-gray-300 text-regent-gray-950 rounded-2xl shadow-md">
            <h3 className="mb-5 text-2xl font-bold">
              Roofers Technical Service LLC (Headquarters)
            </h3>
            <div className={`${mulish.className}`}>
              <div className="flex items-center mb-2.5">
                <span className="min-w-12 h-12 bg-tall-poppy-700 text-white flex justify-center items-center rounded-full mr-4">
                  <FontAwesomeIcon icon={faLocationDot} size="lg" />
                </span>
                <p>
                  P. O. Box: 89515 Dubai,
                  <br /> United Arab Emirates
                </p>
              </div>
              <div className="flex items-center mb-2.5">
                <span className="min-w-12 h-12 bg-tall-poppy-700 text-white flex justify-center items-center rounded-full mr-4">
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </span>
                <Link href="mailto:info@roofersfzc.com">
                  info@roofersfzc.com
                </Link>
              </div>
              <div className="flex items-center mb-2.5">
                <span className="min-w-12 h-12 bg-tall-poppy-700 text-white flex justify-center items-center rounded-full mr-4">
                  <FontAwesomeIcon icon={faPhone} size="lg" />
                </span>
                <Link href="tel:+97144580127">+971 4 458 0127</Link>
              </div>
            </div>
          </div>

          <div className="border border-regent-gray-400 rounded-2xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3611.057288803115!2d55.39583587538083!3d25.167543377729974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDEwJzAzLjIiTiA1NcKwMjMnNTQuMyJF!5e0!3m2!1sen!2sin!4v1756650414539!5m2!1sen!2sin"
              width="100%"
              height={"100%"}
              style={{ border: "0", borderRadius: "16px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="relative w-full pb-10 px-25 text-center">
        <span className="text-2xl sm:text-4xl font-medium px-1 relative top-4 bg-white rounded-lg">
          Other Locations
        </span>
        <div
          className={`text-left flex gap-4 max-lg:flex-col justify-around items-center mx-0 py-8 px-8 border border-regent-gray-400 rounded-2xl shadow-md`}
        >
          <div>
            <div className="flex-1 w-full rounded-[20px] shadow-sm px-6 py-16 bg-regent-gray-300">
              <h3 className="mt-3 text-xl leading-normal font-bold">
                Roofers Steel And Aluminium L.L.C
              </h3>
              <p
                className={`${mulish.className} text-regent-gray-800 text-lg leading-normal mt-3`}
              >
                Abu Dhabi, United Arab Emirates <br />
                Tel: +971 2 236 7617
              </p>
            </div>
          </div>

            <div className="flex-1 w-full rounded-[20px] shadow-sm px-6 py-16 bg-regent-gray-300">
              <h3 className="mt-3 text-xl leading-normal font-bold">
                Roofers Aluminium And Steel Company
              </h3>
              <p
                className={`${mulish.className} text-regent-gray-800 text-lg leading-normal mt-3`}
              >
                Ajman, United Arab Emirates
                <br /> Tel: +971 4 458 0127
              </p>
            </div>

            <div className="flex-1 w-full rounded-[20px] shadow-sm px-6 py-16 bg-regent-gray-300">
              <h3 className="mt-3 text-xl leading-normal font-bold">
                Roofers International
              </h3>
              <p
                className={`${mulish.className} text-regent-gray-800 text-lg leading-normal mt-3`}
              >
                Italy
                <br /> Tel: +39 0423 920 777
              </p>
            </div>
          </div>
      </section>
    </main>
  );
}
