import arFitnes from "@/assets/arfitness.png";
import aniverse from "@/assets/aniverse.png";
// import goldGym from "@/assets/goldgym.png";
import sneakhub from "@/assets/sneakhub.png";
import yoom from "@/assets/yooom.png";
import GithubIcon from "@/assets/github.png";
import linkedInIcon from "@/assets/linkedin.png";
import HashnodeIcon from "@/assets/hashnode.png";

export const experienceData = [
  {
    id: "exp1",
    date: "April 2024 - Present",
    comapny_name: "Everestek",
    company_url: "https://everestek.com/",
    role: "Software Developer Engineer",
    work_done: [
      "Developed and managed key application modules, including the creation, deletion, and detailed views of listings, ensuring seamless user interactions and efficient data handling.",
      "Spearheaded the implementation of advanced features such as dynamic pagination, sorting, and comprehensive filtering, significantly improving the application's usability and user engagement.",
      "Utilized Agile methodologies and conducted thorough code reviews to ensure high-quality code, collaborated with cross-functional teams to define project requirements, and delivered solutions that aligned with design objectives and performance goals.",
    ],
    skills: [
      "Nextjs",
      "AWS",
      "React",
      "TypeScript",
      "Git",
      "Firebase",
      "UI/UX Design",
      "Code Refactoring",
      "Problem Solving",
    ],
  },
  {
    id: "exp2",
    date: "June 2023 - March 2024",
    comapny_name: "Chemarc.com",
    company_url: "https://chemarc.com/",
    role: "Junior Software Developer",
    work_done: [
      "Collaborated with the design team to seamlessly integrate visually compelling UI, ensuring alignment with interface goals. Contributed to the development of 3 in-house features, enhancing application functionality and user experience.",
      "Spearheaded the implementation of crucial features, incorporating dynamic filtering, sorting, and API-driven CRUD operations. Optimized the existing codebase, resulting in a notable 15% boost in application performance.",
      "Implemented Agile methodologies, acquiring expertise in JIRA, GIT, Angular, TypeScript, and refining advanced problem-solving skills.",
    ],
    skills: ["Angular", "TypeScript", "Git", "JIRA", "Problem Solving"],
  },
  {
    id: "exp3",
    date: "Dec 2022 - Jan 2023",
    comapny_name: "JIO Platforms LTD",
    company_url: "https://www.jio.com/platforms/",
    role: "FrontEnd Engineer - Intern",
    work_done: [
      "Developed end-to-end login and signup UI journey utilizing Angular Material and Angular Forms. Integrated the Chart.js library seamlessly to visualize attendance data.",
      "Contributed to the resolution of UI bugs across various screens and assisted the binding team in understanding the flow and functionality of Chart.js. Collaborated with the backend team to seamlessly integrate Chart.js into the system.",
      "Implemented Agile methodologies, acquired expertise in Azure, GIT, Angular, TypeScript, and refined advanced UI development skills at a foundational level.",
    ],
    skills: [
      "Angular",
      "TypeScript",
      "Git",
      "Azure",
      "UI Development",
      "Problem Solving",
    ],
  },
];

export const projectsData = [
  {
    id: "pro1",
    img: sneakhub,
    title: "SneakHub",
    description:
      "Explore Sneakhub, designed to enhance your sneaker shopping experience with high-quality visuals, detailed info, and seamless search functionality, all powered by Expo Router and Expo React Native.",
    github: "https://github.com/atharvamulgund/sneakhub",
    skills: ["React", "React Native", "Expo", "Expo Router"],
  },
  {
    id: "pro2",
    img: yoom,
    title: "Yoom",
    description:
      "Seamlessly log in, create meetings, and utilize advanced features with our Zoom Clone. Empowering seamless collaboration through recording, screen sharing, and participant management.",
    demo: "https://yooom.vercel.app/",
    github: "https://github.com/atharvamulgund/yoom",
    skills: ["nextjs", "Shadcn", "Tailwind CSS", "Clerk Auth", "getStream-io"],
  },
  {
    id: "pro3",
    img: aniverse,
    title: "Aniverse",
    description:
      " Immerse yourself in captivating narratives and vibrant characters. Aniverse is your go-to platform for all things anime, offering a comprehensive experience for enthusiasts.",
    demo: "https://webaniverse.web.app/",
    github: "https://github.com/atharvamulgund/aniverse",
    skills: ["React", "Material UI", "Firebase", "JIKEN API"],
  },
  {
    id: "pro4",
    img: arFitnes,
    title: "AR Fitness",
    description:
      "A progressive website for a gym-like experience at home. It uses the MediaPipe library to track body movements and improve exercise form and mind-muscle connection. ",
    demo: "https://ar-fitness3.web.app/",
    github: "https://github.com/atharvamulgund/AR-Fitness",
    skills: ["React", "Material UI", "Firebase", "Media Pipe API"],
  },
];

export const socialData = [
  {
    platform: "Twitter",
    icon: "",
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
    platform: "Hashnode",
    icon: HashnodeIcon,
    link: "https://atharvamulgund.hashnode.dev/",
  },
];
