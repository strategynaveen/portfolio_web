import Timeline from "./Timeline";

function About() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <div className="flex flex-col md:flex-row justify-center items-center max-container w-full pt-20 gap-8">
        <div className="md:w-[30%] w-[50%] pr-4 ">
          <img
            src="about-img.62b47e7f183d4b4e9feb.webp"
            alt="aboutimg"
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col md:w-[30%] w-[50%] gap-2">
          <h2 className="text-sm text-blue-500 font-montserrat font-bold">
            About me
          </h2>
          <h1 className="text-xl font-rubik font-semibold">
            Full Stack Developer based in Madurai, India 📍
          </h1>
          <p className="text-sm font-palanquin text-slate-700">
            Hey, my name is Naveen Kumar P, and I'm a Full Stack Developer.
            My passion is to create and develop a clean Web Application for my users.
          </p>
          
        </div>
      </div>
      <div className="flex flex-col w-full p-2 items-center">
        <div className="px-4   flex item-center  border-black border-b-2">
          Tech Stack
        </div>
        <div className="flex flex-row flex-wrap gap-3 p-3">
            <img
              src="icons8-html-5.svg"
              alt="html"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />
            <img
              src="icons8-css-logo.svg"
              alt="css"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />
            <img
              src="icons8-javascript.svg"
              alt="html"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />
            <img
              src="icons8-php.svg"
              alt="html"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />
            <img
              src="codeigniter-svgrepo-com.svg"
              alt="html"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />
          
            <img
              src="icons8-nodejs.svg"
              alt="html"
              className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
            />

            <img
              src="icons8-react.svg"
              alt="html"
              className="w-[42px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
            />
            <img
              src="icons8-mysql.svg"
              alt="html"
              className="w-[42px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
            />
            <img
              src="icons8-mongodb.svg"
              alt="html"
              className="w-[42px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
            />
            <img
              src="laravel-2.svg"
              alt="html"
              className="w-[42px] transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300"
            />
          <img
            src="icons8-tailwind-css.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
          <img
            src="material-ui-svgrepo-com.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
          <img
            src="icons8-python.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />
            <img
            src="digitalocean-official.svg"
            alt="html"
            className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 "
          />

          
       
          
         
        </div>
      </div>
      <div className="pt-16 flex-col justify-center items-center ">
        <Timeline />
      </div>
    </div>
  );
}

export default About;
//dev-work.png
