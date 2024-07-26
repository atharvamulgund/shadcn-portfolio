import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import AboutContainer from "@/wrappers/about-container"
import Blog from "@/wrappers/blogs"
import Experience from "@/wrappers/experience"
import Hero from "@/wrappers/home/Hero"
import Projects from "@/wrappers/projects"


const Home = () => {
  return (
   <>
    <Navbar/>
    <Hero/>
    <AboutContainer/>
    <Experience/>
    <Projects/>
    <Blog/>
    <Footer/>
   </>
  )
}

export default Home