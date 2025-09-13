import Image from "next/image";
import { mulish } from "./fonts";

const ProfileCard = ({
  imgURL,
  name,
  title,
}: {
  imgURL: string;
  name: string;
  title: string;
  mob: string;
  email: string;
}) => {
  return (
    // <div className="w-[300px] rounded-[15px] overflow-hidden">
    //   <div className="w-full h-[450px]">
    //     <Image
    //       src={imgURL}
    //       alt={title}
    //       width={300}
    //       height={370}
    //     />
    //   </div>
    //   <h1>{name}</h1>
    // </div>
    <div className=" sm:w-[300px] sm:min-w-[300px] w-[300px] h-[380px] relative group outline-1 outline-regent-gray-400 ">
      <div className="overflow-hidden sm:w-[300px] sm:min-w-[300px] w-[300px] h-[380px] ">
        <Image
          src={imgURL}
          alt={title}
          width={300}
          height={380}
          className="w-full h-full object-fill transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute flex flex-col justify-between items-center w-[80%] px-4 py-2 bottom-[-35] shadow-md bg-white mx-7 rounded-[15px] ">
        <h2
          className={`  text-regent-gray-950 text-xl leading-snug font-semibold`}
        >
          {name}
        </h2>
        <h3 className={`${mulish.className} text-regent-gray-950`}>{title}</h3>
        {/* <h4 className={`${mulish.className} text-regent-gray-950`}>{mob}</h4>
        <h5 className={`${mulish.className} text-regent-gray-950`}>{email}</h5> */}
      </div>
    </div>
  );
};

export default ProfileCard;
