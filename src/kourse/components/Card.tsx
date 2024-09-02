import KourseThumbnail from "@kourse/assets/Rectangle3.png";
import { FiArrowRight } from "react-icons/fi";

type TCardInformation = {
  tags: string;
  title: string;
  price: string;
  duration: string;
  lessons: number;
};

export default function KourseCard({
  title,
  tags,
  duration,
  lessons,
  price,
}: TCardInformation) {
  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg shadow-kourse-primary">
      <img src={KourseThumbnail} alt={title} className="w-full rounded-t-lg" />
      <div className="flex flex-col p-8">
        <div className="flex flex-wrap">
          <div className="text-black text-xs px-4 py-1 bg-gray-300 rounded-full font-semibold font-poppins">
            {tags}
          </div>
        </div>
        <span className="font-poppins font-semibold mt-3 text-xl">{title}</span>
        <span className="font-poppins font-semibold mt-2 text-2xl text-kourse-secondary">
          {price}
        </span>
        <div className="w-full h-[1px] bg-gray-300 mt-3"></div>
        <div className="flex flex-row items-center justify-between mt-4">
          <span className="text-gray-400 font-poppins text-xs font-medium">
            {duration} • {lessons} Lessons
          </span>
          <button className="flex flex-row text-black cursor-pointer font-poppins text-sm items-center font-semibold">
            View Details <FiArrowRight className="ml-1" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
