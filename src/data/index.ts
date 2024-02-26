import arFitnes from "@/assets/arfitness.png"
import aniverse from "@/assets/aniverse.png"
import twttierSystem from "@/assets/twitter system.png"
import twitterLight from "@/assets/twitter light.png"
import twitterDark from "@/assets/twitter dark.png"
import GithubIcon from "@/assets/github.png"
import linkedInIcon from "@/assets/linkedin.png"
import HashnodeIcon from "@/assets/hashnode.png"

const theme =localStorage.getItem('vite-ui-theme')
export const experienceData = [
  {
    id:"exp1",
    date:"June 2023 - present",
        comapny_name:'Chemarc.com',
        company_url:'https://chemarc.com/',
        role:'Software Developer Engineer - I',
        work_done:[
            "Collaborated with the design team to seamlessly integrate visually compelling UI, ensuring alignment with interface goals. Contributed to the development of 3 in-house features, enhancing application functionality and user experience.",
            "Spearheaded the implementation of crucial features, incorporating dynamic filtering, sorting, and API-driven CRUD operations. Optimized the existing codebase, resulting in a notable 15% boost in application performance.",
            "Implemented Agile methodologies, acquiring expertise in JIRA, GIT, Angular, TypeScript, and refining advanced problem-solving skills."
        ],
        skills:["Angular", "TypeScript", "Git", "JIRA", "Problem Solving"]
},
{
        id:"exp2",
        date:"Dec 2022 - Jan 2023",
        comapny_name:'JIO Platforms LTD',
        company_url:'https://www.jio.com/platforms/',
        role:'FrontEnd Engineer - Intern',
        work_done:[
            "Developed end-to-end login and signup UI journey utilizing Angular Material and Angular Forms. Integrated the Chart.js library seamlessly to visualize attendance data.",
            "Contributed to the resolution of UI bugs across various screens and assisted the binding team in understanding the flow and functionality of Chart.js. Collaborated with the backend team to seamlessly integrate Chart.js into the system.",
            "Implemented Agile methodologies, acquired expertise in Azure, GIT, Angular, TypeScript, and refined advanced UI development skills at a foundational level."
        ],
        skills: ["Angular", "TypeScript", "Git", "Azure", "UI Development", "Problem Solving"]
},
{
    id:"exp3",
    date:"Jan 2022 - Dec 2023",
    comapny_name:'Freelancer',
    company_url:'https://www.atharvamulgund.web.app/',
    role:'Front End Developer',
    work_done:[
        "Successfully completed 15+ freelance projects, spanning static sites to comprehensive applications, highlighting adaptability to varying project complexities.",
        " Demonstrated proficiency in designing diverse sites and played a pivotal role in upscaling and refactoring existing codebases for enhanced performance and functionality.",
        "Executed 15+ freelance projects using a diverse tech stack, including React, TypeScript, Redux Toolkit, Material-UI, Shadcn, Tailwind, JavaScript, and Firebase. Designed websites and enhanced existing codebases for improved performance."
    ],
    skills: ["React", "TypeScript", "Git", "Firebase", "UI/UX Design", "Code Refactoring", "Problem Solving"]
}
]

export const projectsData =[
    {
        id:'pro1',
        img:arFitnes,
        title:'AR Fitness',
        description:'A progressive website for a gym-like experience at home. It uses the MediaPipe library to track body movements and improve exercise form and mind-muscle connection. ',
        demo:'https://ar-fitness3.web.app/',
        github:'https://github.com/atharvamulgund/AR-Fitness',
        skills: ['React','Material UI', 'Firebase', 'Media Pipe API']
    },
    {
        id:'pro2',
        img:aniverse,
        title:'Aniverse',
        description:' Immerse yourself in captivating narratives and vibrant characters. Aniverse is your go-to platform for all things anime, offering a comprehensive experience for enthusiasts.',
        demo:'https://webaniverse.web.app/',
        github:'https://github.com/atharvamulgund/aniverse',
        skills: ['React','Material UI', 'Firebase', 'JIKEN API']
    }
]

export const socialData = [
    {
      platform: "Instagram",
      icon: theme === 'dark' ? twitterLight : theme=='light' ? twitterDark : twttierSystem,
      // icon: twttierSystem,
      link: "https://twitter.com/Senpa1C0des",
    },
    {
      platform: "Github",
      icon: GithubIcon,
      link: "https://github.com/atharvamulgund",
    },
    {
      platform: "Linkedin",
      icon: linkedInIcon,
      link: "https://www.linkedin.com/in/atharvamulgund/",
    },
    {
      platform:'Hashnode',
      icon:HashnodeIcon,
      link:'https://atharvamulgund.hashnode.dev/'
    }
  ];
