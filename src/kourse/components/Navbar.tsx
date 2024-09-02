import { FiAlignJustify } from "react-icons/fi";

export default function KourseNavbar() {
  return (
    <>
      <div className="hidden lg:flex flex-row items-center w-full justify-between">
        <h1 className="font-semibold font-sans3 text-2xl text-white">Kourse</h1>
        <div className="flex flex-row gap-14">
          <a href="#" className="text-white font-sans3 font-semibold">
            Home
          </a>
          <a href="#" className="text-white font-sans3">
            Courses
          </a>
          <a href="#" className="text-white font-sans3">
            Post a Job
          </a>
          <a href="#" className="text-white font-sans3">
            Contact Us
          </a>
        </div>
        <button className="text-white bg-white/20 rounded-lg px-6 py-2 font-semibold">
          Sign up
        </button>
      </div>
      <div className="flex lg:hidden flex-row items-center w-full justify-between">
        <h1 className="font-semibold font-sans3 text-2xl text-white">Kourse</h1>
        <button className="text-whiterounded-lg px-6 py-2 font-semibold">
            <FiAlignJustify color="white" size={24} />
        </button>
      </div>
    </>
  );
}
