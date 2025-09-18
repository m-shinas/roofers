import Image from "next/image";

const TestimonyCard = ({
  imgURL,
  name,
  title,
  wordings,
}: {
  imgURL: string;
  name: string;
  title: string;
  wordings: string;
}) => {
  return (
    <div className="mx-2 md:mx-8 lg:px-6 px-4 py-8 lg:py-16 rounded-2xl bg-white max-md:min-w-auto">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <Image
            src={imgURL}
            width={48}
            height={48}
            className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover"
            alt="Client photo"
          />
          <div>
            <div className="font-semibold text-sm sm:text-base">{name}</div>
            <div className="text-xs sm:text-sm text-slate-500">{title}</div>
          </div>
        </div>
        <svg
          className="max-sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          width="54"
          height="40"
          fill="none"
        >
          <path
            fill="#b32024"
            d="M41.659 0a11.666 11.666 0 0 1 11.666 11.473c.3 2.884.257 7.137-1.693 12.047-1.993 5.02-5.88 10.493-12.973 15.813a3.332 3.332 0 0 1-4.667-.666A3.334 3.334 0 0 1 34.659 34c5.213-3.91 8.2-7.71 9.91-11.033A11.668 11.668 0 0 1 30.514 8.24 11.666 11.666 0 0 1 41.66 0zm-30 0a11.666 11.666 0 0 1 11.666 11.473c.3 2.884.257 7.137-1.693 12.047-1.99 5.02-5.88 10.493-12.973 15.813a3.332 3.332 0 0 1-5.3-3.138A3.333 3.333 0 0 1 4.659 34c5.213-3.91 8.2-7.71 9.91-11.033A11.668 11.668 0 0 1 .514 8.24 11.667 11.667 0 0 1 11.66 0z"
          />
        </svg>
      </div>
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed break-words">
        {wordings}
      </p>
    </div>
  );
};

export default TestimonyCard;
