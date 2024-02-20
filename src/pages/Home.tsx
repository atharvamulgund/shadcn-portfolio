import Navbar from '@/components/Navbar'
import AboutContainer from '@/wrappers/about-container'
import Hero from '@/wrappers/home/Hero'
import Experience from '@/wrappers/experience'
import Projects from "@/wrappers/projects"
import Blog from '@/wrappers/blogs'
import Footer from '@/components/Footer'
const Home = () => {
  return (
   <>
   <section className='max-w-screen-lg  m-auto flex justify-center flex-col items-center gap-6 relative overflow-y-none'>
      <Navbar/>
      <Hero />
      <AboutContainer/>
      <Experience/>
      <Projects/>
      <Blog/>
      <Footer/>
   </section>
   </>
  )
}

export default Home
