import DigidawNavbar from "@digidaw/Components/Navbar";
import "@digidaw/Assets/digidaw.css";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import DigidawCardYellow from "@digidaw/Components/CardYellow";
import DigidawThreeWhiteCard from "@digidaw/Components/ThreeWhiteCard";
import DigidawPurpleCard from "@digidaw/Components/PurpleCard";
import DigidawIdentityGreenCard from "@digidaw/Components/IdentityGreenCard";
import DigidawGreenCard from "@digidaw/Components/GreenCard";

export default function DigidawPage() {
  return (
    <div className="w-full flex min-h-[100svh] bg-gradient-to-br from-digidaw-primary to-digidaw-secondary">
      <div className="container mx-auto px-5 lg:px-0 py-8">
        <DigidawNavbar />
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-10">
          <div className="flex flex-col w-full justify-center">
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
          {/* Cards */}
          <div className="hidden xl:flex relative w-full min-h-[700px] items-center justify-center">
            <div className="w-1/2 scale-75 absolute left-7 top-0">
              <DigidawPurpleCard />
            </div>
            <div className="w-1/2 scale-75 absolute right-7 top-0">
              <DigidawGreenCard />
            </div>
            <div className="w-1/2 absolute left-0">
              <DigidawCardYellow />
            </div>
            <div className="w-1/2 absolute -right-10">
              <DigidawThreeWhiteCard />
            </div>
            <div className="w-1/2 scale-90 absolute left-20 bottom-10">
              <DigidawIdentityGreenCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
