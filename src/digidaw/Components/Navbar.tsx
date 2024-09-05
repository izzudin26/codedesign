import { useState } from "react";
import "@digidaw/Assets/digidaw.css";
import { HiBars2 } from "react-icons/hi2";

export default function DigidawNavbar() {
  const [menus] = useState([
    {
      label: "Home",
      active: true,
    },
    {
      label: "Discover Elements",
      active: false,
    },
    {
      label: "Pricing",
      active: false,
    },
    {
      label: "Contact Us",
      active: false,
    },
  ]);

  return (
    <>
      <div className="hidden lg:flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-xl text-white font-notoSans">
            digidaw
          </h1>
          <div className="flex flex-row ml-16 gap-10">
            {menus.map((m) => (
              <a
                href="#"
                className={`font-sans3 hover:text-white duration-300 ${
                  m.active ? "text-white" : "text-white/60"
                }`}
              >
                {m.label}
              </a>
            ))}
          </div>
        </div>
        <button className="btn-flat bg-white text-black">Sign In</button>
      </div>
      <div className="lg:hidden flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          <h1 className="font-semibold text-xl text-white font-notoSans">
            digidaw
          </h1>
        </div>
        <button className="p-2 rounded-lg ring-1 ring-white">
          <HiBars2 size={24} color="white" />
        </button>
      </div>
    </>
  );
}
