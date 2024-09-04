export default function DigidawThreeWhiteCard() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row p-4 w-full bg-white rounded-xl items-center">
        <div className="h-5 w-5 rounded-full bg-black/10"></div>
        <div className="h-5 w-1/2 rounded-full bg-black/10 ml-4"></div>
      </div>
      <div className="flex flex-row p-4 w-full bg-[#DDFFE2] rounded-xl items-center mt-4">
        <div className="h-5 w-5 rounded-full bg-[#00FF66] bg-opacity-30 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full bg-[#0ED7B5] flex items-center justify-center"></div>
        </div>
        <div className="h-5 w-1/2 rounded-full bg-black/10 ml-4"></div>
      </div>
      <div className="flex flex-row p-4 w-full bg-white rounded-xl items-center mt-4">
        <div className="h-5 w-5 rounded-full bg-black/10"></div>
        <div className="h-5 w-1/2 rounded-full bg-black/10 ml-4"></div>
      </div>
    </div>
  );
}
