import DigidawNavbar from "@digidaw/Components/Navbar";
import "@digidaw/Assets/digidaw.css";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";

export default function DigidawPage() {
  return (
    <div className="w-full flex min-h-[100svh] bg-gradient-to-br from-digidaw-primary to-digidaw-secondary">
      <div className="container mx-auto px-5 lg:px-0 py-8">
        <DigidawNavbar />
        <div className="grid grid-cols-2 gap-5 mt-10">
          <div className="flex flex-col w-full">
            <h2 className="text-5xl text-white font-notoSans font-light tracking-wide">
              Experience the power of
            </h2>
            <span className="text-5xl text-white font-notoSans font-semibold mt-3">
              {" "}
              professional UI kits
            </span>

            <div className="w-3/4 mt-7">
              <p className="font-notoSans text-lg text-white/60">
                Choose from a wide range of styles and themes to find the
                perfect fit for your project
              </p>
            </div>
            <button className="btn-flat bg-[#FFB802] w-min text-black mt-8 shadow-lg shadow-digidaw-primary">
              Discover
            </button>
            <div className="flex flex-row mt-8 gap-6 w-3/4">
              <div className="badge">
                <div className="badge-inside">
                  <HiOutlineSquare3Stack3D color="white" size={24} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-medium text-lg font-notoSans">
                  Unlimited Blocks
                </span>
                <p className="text-white/60 font-notoSans text-sm">
                  Having access to unlimited blocks means that users can create
                  a wide range of designs without running out of elements to
                  work with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
