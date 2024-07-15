import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row  justify-center gap-8 h-full items-center pb-16  absolute z-20 max-container  ">
        <div className="md:w-[25%] w-[50%] pr-6">
          <img
            src="profile_photo.jpeg"
            alt="deeraj"
            className="rounded-full bg-yellow-400  outline outline-offset-2 outline-[4px] "
          />
        </div>
        <div className="flex flex-col  items-center ">
          <p className="font-montserrat">Hello, I'm</p>
          <p className="font-rubik text-xl md:text-4xl font-semibold">
            NAVEEN KUMAR P
          </p>
          <p className="font-palanquin text-xl font-medium pt-2 pb-4">
            Full Stack Developer
          </p>
          <a href="Naveen_kumar_resume.pdf" target="_blank">
            <button className="p-2 font-montserrat text-black hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-white/50 border-2 border-zinc-800 text-xs rounded-3xl hover:border-2 hover:border-neutral-800 hover:text-black ">
              Resume
            </button>
          </a>
          <div className="flex flex-row gap-2 pt-4">
            <a href="https://github.com/strategynaveen" target="_blank">
              <FaGithub className="text-3xl hover:text-orange-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/naveen-kumar-473006218/"
              target="_blank"
            >
              <IoLogoLinkedin className="text-3xl hover:text-blue-600" />{" "}
            </a>
          </div>
        </div>
      </div>
      <div className="max-container sm:w-full max-sm:w-full overflow-hidden  absolute md:bottom-0 sm:bottom-0 max-sm:bottom-0 ">
        <motion.div
          className="  md:text-[50vh] sm:text-[50vh] max-sm:text-[30vh] whitespace-nowrap  text-gray-400/20 font-orbitron font-bold  w-1/2"
          initial={{ x: 0 }}
          animate={{ x: "-220%" }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 20 }}
        >
          FULL STACK DEVELOPER
        </motion.div>
      </div>
    </>
  );
}

export default Home;
