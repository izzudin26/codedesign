export default function DigidawGreenCard() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-1/2 p-5 px-8 rounded-2xl bg-[#00FF66] bg-opacity-30 flex items-center justify-center">
        <div className="w-full bg-white/5 h-5 rounded-full"></div>
      </div>
      <div className="p-7 w-full rounded-2xl bg-[#00FF66] bg-opacity-30 mt-4">
        <div className="flex flex-row items-center justify-start">
          <div className="w-4 h-4 rounded-full bg-white/10 flex-none"></div>
          <div className="ml-4 w-1/2 h-3 rounded-full bg-white/10 flex-none"></div>
        </div>
        <div className="flex flex-row items-center justify-start mt-6">
          <div className="w-4 h-4 rounded-full bg-white/10 flex-none"></div>
          <div className="ml-4 w-1/2 h-3 rounded-full bg-white/10 flex-none"></div>
        </div>
        <div className="flex flex-row items-center justify-start mt-6">
          <div className="w-4 h-4 rounded-full bg-white/10 flex-none"></div>
          <div className="ml-4 w-1/2 h-3 rounded-full bg-white/10 flex-none"></div>
        </div>
      </div>
    </div>
  );
}
