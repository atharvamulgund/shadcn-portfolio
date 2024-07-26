// import aboutImage from '@/assets/about.svg'
const AboutContainer = () => {
  return (
    <>
      <section className="flex items-center justify-center sm:flex-row flex-col">
        {/* <img src={aboutImage} alt='aboutimg' className='sm:w-[380px] w-s[280px]' /> */}
        <div className="max-w-2xl p-8 rounded-md">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text ">About Me</h1>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            Skilled and creative Software Engineer specializing in
            cutting-edge web technologies and modern development practices.
            Proficient in React.js, Angular, Javascript, TypeScript, Redux, Tailwind CSS, Firebase,
            and Material UI.
          </p>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            Passionate about designing visually stunning websites and wireframes
            using Figma, ensuring a sleek and modern user interface. Adept at
            responsive web design and meticulous code optimization, prioritizing
            performance and seamless user experiences.
          </p>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            Skilled in quickly identifying and resolving complex UI bugs,
            ensuring flawless functionality. Continuously exploring and adopting
            the latest advancements in web development.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutContainer;
