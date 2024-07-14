import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pagelinks } from "../Constants";
function NavBar() {
  const [hamClick, setHamClick] = useState(false);

  return (
    <header
      className="px-8 py-4 fixed z-30 w-full  max-container backdrop-blur-md bg-white/50
    "
    >
      <nav className="flex justify-between items-center max-container ">
        <Link to="/">
          <div className="flex flex-col justify-center items-center gap-2"></div>
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-md:hidden">
          {pagelinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.link}
                className="font-rubik leading-normal text-lg text-[#040404] hover:text-[#ff1b6b]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        {/* */}
        <button
          className="hidden max-md:block "
          onClick={() => setHamClick(true)}
        >
          <GiHamburgerMenu className="text-[#040404] text-xl" />
        </button>
        {hamClick && (
          <div
            className="fixed h-[100vh] w-screen md:hidden  bg-black/50 backdrop-blur-md top-0 left-0 z-50  transition-all delay-100"
            onClick={() => setHamClick(false)}
          >
            <div className="text-[#040404]  bg-[#F3F8FF] flex-col absolute right-0 top-0 h-full px-8 pt-2  z-50 flex">
              <div className="self-end">
                <IoClose
                  className="text-coral-red mb-8 text-4xl cursor-pointer mt-0"
                  onClick={() => setHamClick(false)}
                />
              </div>
              <ul className="flex-1 flex-col flex justify-center items-center gap-16 p-12">
                {pagelinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.link}
                      className="font-rubik leading-normal text-3xl text-[#040404]  hover:text-yellow-400"
                      onClick={() => setHamClick(false)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default NavBar;
