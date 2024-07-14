import { projectData } from "../Constants";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

function Projects() {
  return (
    <section className="flex justify-center flex-col items-center">
      <h1 className="text-sm text-blue-500 font-montserrat font-bold">
        Projects
      </h1>
      <div className="  w-full flex justify-center flex-row flex-wrap gap-4 items-center ">
        {projectData.map((val) => (
          <>
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <img class="rounded-t-lg" src={val.imgUrl} alt="" />
              </a>
              <div class="p-5">
                  <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{val.title}</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{val.description}</p>
                  <div className="flex flex-row items-center justify-center">
                    <a href={val.git}>
                      <FaGithub className="text-3xl hover:text-orange-500" />
                    </a>
                  </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}

export default Projects;
