import Banner from "../ui/Banner";
import { leaders } from "../lib/data";
import ProfileCard from "../ui/ProfileCard";
import { Metadata } from "next";
import Image from "next/image";
import { mulish } from "../ui/fonts";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Roofers Group of Companies is a leading, multi-disciplinary enterprise in the UAE construction market with over 24 years of proven excellence. We specialise in Roof Tiles and high-quality Steel, Aluminium, and Stainless-Steel Fabrication, Erection, and Civil Contracting.",
  keywords: [
    "About us",
    "Vision",
    "Mission",
    "Values",
    "Company Profile",
    "Leadership",
    "Management",
    "Team",
  ],
  alternates: {
    canonical: "/about-us",
  },
};

export default function page() {
  return (
    <main>
      <Banner />
      <section className="padding flex justify-between items-center max-lg:flex-col gap-10 w-full">
        <div className="flex flex-1 flex-col">
          <h2 className="text-5xl text-tall-poppy-700 capitalize font-semibold lg:max-w-lg">
            Our Story
          </h2>
          <p className={`${mulish.className} mt-4 lg:max-w-lg text-lg`}>
            For more than two decades, Roofers Group of Companies has built a
            strong reputation as a trusted name in the UAE construction
            industry. With over 24 years of experience, we have grown into a
            multi-disciplinary enterprise, bringing expertise, reliability, and
            quality to every project we undertake.
          </p>
          <p className={`${mulish.className} mt-4 lg:max-w-lg text-lg`}>
            Our core strengths lie in Roof Tiles, as well as Steel, Aluminium,
            and Stainless-Steel Fabrication and Erection, supported by a wide
            range of Civil Contracting services. Backed by fully equipped
            workshops and skilled teams in Dubai, Abu Dhabi, and Ajman, we
            deliver complete structural and finishing solutions for commercial,
            industrial, and high-end residential projects.
          </p>
          <p className={`${mulish.className} mt-4 lg:max-w-lg text-lg`}>
            Beyond contracting, Roofers Group also connects the UAE market with
            the world. Through our partner factories in Italy, Spain, China,
            Brazil, and the USA, we manufacture and supply premium-quality
            products, ensuring our clients benefit from international standards
            at competitive value. Our direct selling model keeps procurement
            efficient and cost-effective, while never compromising on quality.
          </p>
          <p className={`${mulish.className} mt-4 lg:max-w-lg text-lg`}>
            From concept to completion, our journey has always been guided by a
            commitment to excellence, innovation, and customer trust — values
            that continue to shape everything we do.
          </p>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/our_story.avif"
            width={584}
            height={594}
            alt="roofside"
            className="object-cover rounded-2xl"
          />
        </div>
      </section>

      {/* Mission / Vision / Services Section */}
      <section className="relative w-full h-[75vh] bg-[url('/roof-bg.JPG')] bg-no-repeat bg-cover bg-center flex justify-center items-center mb-20">
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-white/30 to-white/10"></div>
        <div className="max-w-7xl mx-auto px-4 grid gap-6 md:grid-cols-3 absolute md:bottom-[-60] z-10">
          {/* Card 1 */}
          <div className="rounded-2xl bg-regent-gray-400 text-regent-gray-950 p-4 sm:p-8 shadow-lg flex ">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="62"
                height="62"
                className="fill-tall-poppy-700 stroke-tall-poppy-700"
              >
                <path d="M31.118 1c2.694.008 5.375.38 7.969 1.106l-1.444 3.488a26.381 26.381 0 1 0 18.75 18.75l3.488-1.463a30 30 0 1 1-28.763-21.88z" />
                <path d="M50.9 26.688A20.27 20.27 0 1 1 35.339 11.2l-1.163 2.925a17.326 17.326 0 1 0 13.82 13.725l2.906-1.162z" />
                <path d="M31.12 38.669a7.65 7.65 0 0 0 7.5-6.9l3.056-1.275V31a10.669 10.669 0 1 1-10.557-10.67h.45l-1.255 3.17a7.631 7.631 0 0 0 .806 15.169z" />
                <path d="M49.49 22.263a.938.938 0 0 1-.656.281h-6.843L31.922 32.613a1.89 1.89 0 0 1-2.681-2.663l10.256-10.2v-6.543a.938.938 0 0 1 .281-.657L50.26 2.07a.937.937 0 0 1 1.593.655v7.5h7.388a.939.939 0 0 1 .656 1.594L49.491 22.263z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg">
                Building with precision and passion — delivering durable,
                high-quality roofing and metal solutions on time.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-regent-gray-400 text-regent-gray-950 p-4 sm:p-8 shadow-xl flex ">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="fill-tall-poppy-700 stroke-tall-poppy-700"
              >
                <path d="M59.056 27.173C52.58 17.525 41.7 11.765 29.952 11.765c-11.748 0-22.629 5.76-29.104 15.406a4.946 4.946 0 0 0 0 5.538C7.092 42.012 17.435 47.682 28.7 48.076c.722.065 1.46.076 2.183.01 11.389-.296 21.87-5.987 28.172-15.377a4.938 4.938 0 0 0 .001-5.536zM31.716 43.72a17.451 17.451 0 0 1-3.738-.012C21.073 42.79 15.73 37 15.73 30c0-7.637 6.352-13.85 14.161-13.85 7.809 0 14.162 6.213 14.162 13.85 0 7.03-5.389 12.84-12.335 13.721zm-27.31-13.4a.67.67 0 0 1 0-.758c2.59-3.858 6.011-6.963 9.917-9.247-1.813 2.806-2.879 6.123-2.879 9.686 0 3.483 1.021 6.727 2.76 9.493-3.855-2.278-7.235-5.356-9.798-9.174zm51.094 0c-2.608 3.884-6.056 7.006-9.995 9.294 1.785-2.791 2.834-6.08 2.834-9.613 0-3.613-1.093-6.975-2.953-9.805 3.99 2.293 7.48 5.443 10.115 9.368a.668.668 0 0 1-.001.756z" />
                <path d="M29.89 22.627c-4.122 0-7.475 3.307-7.475 7.373 0 4.066 3.353 7.373 7.475 7.373s7.475-3.307 7.475-7.373c0-4.066-3.353-7.373-7.475-7.373zm0 10.46c-1.76 0-3.19-1.385-3.19-3.087 0-1.702 1.43-3.088 3.19-3.088 1.758 0 3.19 1.386 3.19 3.088 0 1.702-1.432 3.088-3.19 3.088zm0-23.354c1.183 0 2.142-.96 2.142-2.143V2.143a2.143 2.143 0 0 0-4.285 0V7.59c0 1.183.96 2.143 2.143 2.143zm0 40.534c-1.184 0-2.143.96-2.143 2.143v5.447a2.143 2.143 0 0 0 4.285 0V52.41a2.143 2.143 0 0 0-2.142-2.143zM40.588 9.733a2.14 2.14 0 0 0 1.687-.82l4.277-5.447A2.145 2.145 0 0 0 46.19.457a2.145 2.145 0 0 0-3.01.362l-4.276 5.447a2.145 2.145 0 0 0 1.684 3.467zm-23.083-.82a2.14 2.14 0 0 0 3.01.363 2.144 2.144 0 0 0 .362-3.01L16.598.82a2.144 2.144 0 0 0-3.371 2.647l4.278 5.448zm0 42.173-4.278 5.448a2.144 2.144 0 0 0 3.371 2.647l4.279-5.447a2.144 2.144 0 0 0-3.372-2.648zm24.77 0a2.145 2.145 0 0 0-3.01-.362 2.145 2.145 0 0 0-.361 3.01l4.277 5.447a2.14 2.14 0 0 0 3.01.362 2.145 2.145 0 0 0 .361-3.01l-4.277-5.447z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Our Vision
              </h3>
              <p className="text-base sm:text-lg">
                To shape skylines with innovation, craftsmanship, and lasting
                value for generations to come.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-regent-gray-400 text-regent-gray-950 p-4 sm:p-8 shadow-xl flex ">
            <div className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="60"
                className="fill-tall-poppy-700 stroke-tall-poppy-700"
              >
                <path d="M54.057 14.7a2.993 2.993 0 0 0-1.644-2.384L28.416.317a3 3 0 0 0-2.685 0L1.733 12.316A3.005 3.005 0 0 0 .093 14.7c-.034.32-2.883 32.297 25.764 45.037a2.96 2.96 0 0 0 2.436 0C56.94 46.998 54.09 15.025 54.056 14.7zM27.075 53.688C6.77 43.873 5.81 22.927 5.975 16.906l21.1-10.55L48.159 16.9c.111 5.967-.983 27.052-21.084 36.788z" />
                <path d="m24.074 31.757-6.878-6.879-4.242 4.242 11.12 11.12 17.12-17.12-4.242-4.24-12.878 12.877z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Core Values
              </h3>
              <p className="text-base sm:text-lg">
                Guided by integrity, driven by innovation, committed to quality,
                safety, and on-time delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:my-8 my-4 padding-x w-full relative">
       
        <h2 className="drop-shadow-lg text-center text-4xl sm:text-5xl font-semibold bg-gradient-to-r from-tall-poppy-600 to-tall-poppy-700 text-white text-shadow-lg text-shadow-regent-gray-950 py-8 rounded-b-4xl">
          Our Leaders
        </h2>
        <div className="my-14 flex justify-center flex-wrap gap-12">
          {leaders.map((leader) => (
            <ProfileCard key={leader.name} {...leader} />
          ))}
        </div>
      </section>
    </main>
  );
}
