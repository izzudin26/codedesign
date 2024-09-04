import { HiChevronUp, HiChevronDown } from "react-icons/hi2";

export default function DigidawPurpleCard() {
  return (
    <div className="flex flex-col p-5 rounded-2xl bg-[#7E82FC]">
      <div className="flex flex-row items-center justify-between">
        <div className="w-1/2 bg-white h-3 rounded-full"></div>
        <HiChevronUp size={24} color="#FFFFFF" />
      </div>
      <div className="w-11/12 bg-white/30 h-2 rounded-full mt-4"></div>
      <div className="w-4/5 bg-white/30 h-2 rounded-full mt-3"></div>
      <div className="flex flex-row items-center justify-between mt-6">
        <div className="w-1/3 bg-white/30 h-3 rounded-full"></div>
        <HiChevronDown size={24} color="#FFFFFF" />
      </div>
      <div className="h-[1px] w-full bg-white/10 mt-3"></div>
      <div className="flex flex-row items-center justify-between  mt-3">
        <div className="w-2/3 bg-white/30 h-3 rounded-full"></div>
        <HiChevronDown size={24} color="#FFFFFF" />
      </div>
      <div className="h-[1px] w-full bg-white/10 mt-3"></div>
      <div className="flex flex-row items-center justify-between mt-3">
        <div className="w-3/5 bg-white/30 h-3 rounded-full"></div>
        <HiChevronDown size={24} color="#FFFFFF" />
      </div>
    </div>
  );
}
