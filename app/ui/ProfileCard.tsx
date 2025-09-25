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
  
    <div className=" sm:w-[300px] sm:min-w-[300px] max-w-[300px] max-h-[380px] relative group rounded-xl shadow-md">
      <div className="overflow-hidden sm:w-[300px] sm:min-w-[300px] max-w-[300px] max-h-[380px] rounded-xl">
        <Image
          src={imgURL}
          alt={title}
          width={300}
          height={380}
          className="w-full h-full object-cover transition duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      <div className="absolute bottom-[-3] w-full flex flex-col justify-between items-center px-4 py-2 shadow-md bg-white rounded-[15px] transition-colors duration-500 ease-in-out ">
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
