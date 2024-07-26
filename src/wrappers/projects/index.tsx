import { Button } from "@/components/ui/button";
import { projectsData } from "@/data";
import { Github, Link } from "lucide-react";

const Projects = () => {
  return (
    <section className="flex items-center justify-center sm:flex-row flex-col">
      <div className="max-w-2xl p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4 bg-gradient-to-b from-red-500 to-yellow-300 text-transparent bg-clip-text ">
          Recent Work
        </h1>

        <div className="flex justify-center sm:justify-between items-center gap-8 flex-wrap">
          {projectsData &&
            projectsData?.map((item) => (
              <div
                className="max-w-[18rem] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                key={item?.id}
              >
                <img
                  className="rounded-t-lg h-40 w-full object-fill"
                  src={item?.img}
                  alt=""
                />
                <div className="p-5">
                  <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item?.title}
                  </h3>
                  <div className="flex w-full items-center justify-start flex-wrap gap-1">
                    {item?.skills?.map((item) => (
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item?.description}
                  </p>
                  <div className="flex justify-center item-center gap-4">
                    {item?.demo ? (
                      <a href={item?.demo}>
                        <Button
                          variant="link"
                          className="flex gap-2 items-center"
                        >
                          <Link /> Link
                        </Button>
                      </a>
                    ) : null}
                    {item?.github ? (
                      <a href={item?.github}>
                        <Button
                          variant="link"
                          className="flex gap-2 items-center"
                        >
                          <Github /> Github
                        </Button>
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
