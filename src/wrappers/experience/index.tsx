import {experienceData} from "@/data/index";

const index = () => {
  return (
    <>
      <section className="flex items-center justify-center sm:flex-row flex-col">
        {/* <img src={aboutImage} alt='aboutimg' className='sm:w-[380px] w-s[280px]' /> */}
        <div className="max-w-2xl p-8 rounded-md flex items-start justify-around gap-4 flex-col">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-b from-purple-600 to-pink-500 text-left text-transparent bg-clip-text">
            Experience
          </h1>
          <div className="max-w-2xl rounded-md flex items-center justify-around gap-4 ">
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
              {experienceData && experienceData?.map((item)=>(
                <li className="mb-10 ms-4" key={item?.id}>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none italic text-gray-400 dark:text-gray-500">
                  {item?.date}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item?.role} @ {item?.comapny_name}
                </h3>
                <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                 {item?.work_done.map((work,key)=>(
                  <li className="list-disc ml-4 mt-4 tracking-wider" key={key}>{work}</li>
                 ))}
                </ul>
              </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
