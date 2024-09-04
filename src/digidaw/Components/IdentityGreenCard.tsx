export default function DigidawIdentityGreenCard() {
  return (
    <div className="w-full flex flex-col p-8 rounded-2xl bg-[#11D1A3]">
      <div className="flex flex-row items-center justify-start">
        <div className="w-9 h-9 flex flex-none bg-black/20 rounded-lg"></div>
        <div className="flex flex-col w-full ml-4">
          <div className="w-1/2 rounded-full h-3 bg-black/20"></div>
          <div className="w-1/4 rounded-full h-3 bg-black/10 mt-2"></div>
        </div>
      </div>
      <div className="w-11/12 rounded-full h-4 bg-black/10 mt-4"></div>
      <div className="w-5/6 rounded-full h-4 bg-black/10 mt-2"></div>
      <div className="w-2/3 rounded-full h-4 bg-black/10 mt-2"></div>
    </div>
  );
}
