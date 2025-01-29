// import aboutImage from '@/assets/about.svg'
const AboutContainer = () => {
  return (
    <>
      <section className="flex items-center justify-center sm:flex-row flex-col">
        {/* <img src={aboutImage} alt='aboutimg' className='sm:w-[380px] w-s[280px]' /> */}
        <div className="max-w-2xl p-8 rounded-md">
          <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text ">
            About Me
          </h1>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            Hi, I’m Atharva Mulgund—a results-driven Software Development
            Engineer with a relentless passion for solving complex problems and
            delivering innovative solutions. My journey in technology is fueled
            by curiosity, a dedication to continuous learning, and a drive to
            create meaningful impact through software.
          </p>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            With a strong foundation in developing secure, scalable, and
            user-centric applications, I’ve worked on projects that seamlessly
            combine functionality and design to deliver exceptional user
            experiences. My approach is anchored in attention to detail,
            strategic thinking, and the ability to adapt to new challenges.
          </p>
          <p className="text-gray-500 dark:text-gray-400 sm:text-xl mb-6">
            I envision technology as a bridge between ideas and reality, and I
            strive to build systems that not only solve today’s problems but
            also scale for tomorrow’s opportunities. Beyond meeting
            expectations, I aim to redefine them, ensuring that my work leaves a
            lasting impact on users and businesses alike. Let’s create,
            innovate, and push boundaries together.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutContainer;
