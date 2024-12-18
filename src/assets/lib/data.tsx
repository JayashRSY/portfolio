import adobexdicon from "../../assets/icons/adobexdicon.svg";
import canvaicon from "../../assets/icons/canvaicon.svg";
import figmaicon from "../../assets/icons/figmaicon.svg";
import htmlicon from "../../assets/icons/htmlicon.svg";
import cssicon from "../../assets/icons/cssicon.svg";
import javascripticon from "../../assets/icons/javascripticon.svg";
import typescripticon from "../../assets/icons/typescripticon.svg";
import reacticon from "../../assets/icons/reacticon.svg";
import nodejsicon from "../../assets/icons/nodejsicon.svg";
import tailwindcssicon from "../../assets/icons/tailwindicon.svg";
import mongodbicon from "../../assets/icons/mongoicon.svg";
import expressicon from "../../assets/icons/expressicon.svg";
import sassscssicon from "../../assets/icons/sassicon.svg";
import nextjsicon from "../../assets/icons/nextjsicon.svg";
import nextjsiconwhite from "../../assets/icons/nextjsiconwhite.svg";
// import trelloicon from "../../assets/icons/trelloicon.svg";
// import apiicon from "../../assets/icons/apiicon.svg";
// import axiosicon from "../../assets/icons/axiosicon.svg";
// import spotifyicon from "../../assets/icons/spotifyicon.svg";
// import netlifyicon from "../../assets/icons/netlifyicon.svg";
// import rendericon from "../../assets/icons/rendericon.svg";
// import jwticon from "../../assets/icons/jwticon.svg";
import wordpressicon from "../../assets/icons/wordpressicon.svg";
import shopifyicon from "../../assets/icons/shopifyicon.svg";
import webflowicon from "../../assets/icons/webflowicon.svg";
// import tastyMockup from "../../assets/img/tasty_mockup.webp";
import taskMockup from "../../assets/img/projects/task-tracker.png";
import winplayMockup from "../../assets/img/projects/winplay.jpeg";
// import kalabhavanMockup from "../../assets/img/projects/kalabhavan.png";
import innov8Mockup from "../../assets/img/projects/innov8.jpeg";
// import kanbanMockup from "../../assets/img/projects/kanban.png";
import landlordMockup from "../../assets/img/projects/landlord.png";
import taskifyMockup from "../../assets/img/projects/taskify.png";
import promptPediaMockup from "../../assets/img/projects/prompt-pedia.png";
import diceMockup from "../../assets/img/projects/dice-game.png";
// import codingMockup from "../../assets/img/projects/compiler.png";
// import cityMockup from "../../assets/img/projects/city-search.png";
// import gitUserMockup from "../../assets/img/projects/github-finder.png";
// import instorMockup from "../../assets/img/instor_mockup.webp";
// import silentmoonMockup from "../../assets/img/silentmoon_mockup.webp";
import profilepicture from "../img/me2.png";
import caricon from "../../assets/icons/car-icon.svg";
import travelicon from "../../assets/icons/travel-icon.svg";
import hardwareicon from "../../assets/icons/hardware-icon.svg";
import expressiconwhite from "../../assets/icons/expressiconwhite.svg";
import reduxicon from "../../assets/icons/reduxicon.svg";
import chakrauiicon from "../../assets/icons/chakrauiicon.svg";
import bootstrapicon from "../../assets/icons/bootstrapicon.svg";
import angularicon from "../../assets/icons/icons8-angular-100.png";
import awsicon from "../../assets/icons/awsicon.svg";
import pythonicon from "../../assets/icons/pythonicon.svg";
// import bootstrapIcon from "../../assets/icons/bootstrap-icon.svg";
import {
  GoHome,
  GoPerson,
  GoMail,
  GoStack,
  GoProject,
  GoPaperclip,
} from "react-icons/go";
import {
  FiGithub,
  FiLink,
  FiLinkedin,
  FiMail,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import Imprint from "../../components/Imprint";
import Privacy from "../../components/Privacy";

export const headerIntroData = {
  title: {
    de: "Hi, ich bin Jayash",
    en: "Hi, I'm Jayash",
  },
  subtitle: "Fullstack Developer ",
  description: {
    de: "Ich bin Jayash, ein Fullstack-Entwickler mit dem Ziel, meine Karriere voranzutreiben und an inspirierenden Projekten teilzunehmen. Hier präsentiere ich meine Arbeiten und meine Leidenschaft für die Webentwicklung. Lassen Sie uns gemeinsam digitale Lösungen gestalten und die Zukunft formen!",
    en: "I'm Jayash, a fullstack developer with the goal of advancing my career and participating in inspiring projects. Here I present my work and my passion for web development. Let's shape digital solutions together and shape the future!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        de: "Kontaktiere mich",
        en: "Contact me",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        de: "Meine Projekte",
        en: "My Projects",
      },
      icon: FiGithub,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Prompt Pedia",
    description:
      "Prompt Pedia is a full-stack Next.js application powered by MongoDB, enabling users to create, share, and discover unique prompts for language models.",
    description_de:
      "Prompt Pedia ist eine Full-Stack-Anwendung in Next.js, die von MongoDB unterstützt wird und es Benutzern ermöglicht, einzigartige Eingabeaufforderungen für Sprachmodelle zu erstellen, zu teilen und zu entdecken.",
    technologies: ["nextjs", "reactjs", "nodejs", "typescript", "mongodb"],
    image: promptPediaMockup,
    deploymenturl: "https://prompt-pedia-101.vercel.app/",
    githuburl: "https://github.com/JayashRSY/prompt-pedia",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Landlord",
    description:
      "Landlord is a real estate platform featuring a NextJS-powered interface with Tailwind CSS and Shadcn UI components. Users can list properties, upload photos, and utilize a live map view. Clerk handles user management, enabling seamless authentication and account management. Buyers can browse listings, contact agents, and interact with the user-friendly features, creating an efficient real estate experience.",
    description_de:
      "Die Immobilienplattform verfügt über eine NextJS-basierte Schnittstelle mit Tailwind CSS- und Shadcn UI-Komponenten. Benutzer können Immobilien auflisten, Fotos hochladen und eine Live-Kartenansicht nutzen. Clerk übernimmt die Benutzerverwaltung und ermöglicht eine nahtlose Authentifizierung und Kontoverwaltung. Käufer können Angebote durchsuchen, Makler kontaktieren und mit den benutzerfreundlichen Funktionen interagieren, wodurch ein effizientes Immobilienerlebnis entsteht.",
    technologies: [
      "nextjs",
      "reactjs",
      "typescript",
      "tailwindcss",
      "supabase",
    ],
    image: landlordMockup,
    deploymenturl: "https://landlord-one.vercel.app/",
    githuburl: "https://github.com/JayashRSY/landlord",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Taskify",
    description:
      "Taskify is a dynamic task management application developed using React.js, Node.js, TypeScript, and MongoDB, styled with Tailwind CSS. The app features user authentication for seamless login and signup, allowing users to create and manage boards and tasks efficiently. It supports drag-and-drop functionality for task status updates across categories such as To-Do, In Progress, and Done. Users can assign tasks to team members, share boards with colleagues, and maintain a clear overview of project tickets, enhancing collaboration and productivity in team environments.",
    description_de:
      "Taskify ist eine dynamische Aufgabenverwaltungsanwendung, die mit React.js, Node.js, TypeScript und MongoDB entwickelt und mit Tailwind CSS formatiert wurde. Die App bietet Benutzerauthentifizierung für eine nahtlose Anmeldung und Anmeldung, sodass Benutzer Boards und Aufgaben effizient erstellen und verwalten können. Es unterstützt die Drag-and-Drop-Funktionalität für Aktualisierungen des Aufgabenstatus in Kategorien wie 'To-Do', 'In Bearbeitung' und 'Fertig'. Benutzer können Teammitgliedern Aufgaben zuweisen, Boards mit Kollegen teilen und einen klaren Überblick über Projekttickets behalten, um die Zusammenarbeit und Produktivität in Teamumgebungen zu verbessern.",
    technologies: [
      "reactjs",
      "nodejs",
      "tailwindcss",
      "js",
      "typescript",
      "mongodb",
    ],
    image: taskifyMockup,
    deploymenturl: "https://taskify-me.vercel.app",
    githuburl: "https://github.com/JayashRSY/taskify-ui",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Innov8",
    description:
      "Developed a professional and user-friendly website that showcases the company's expertise in IT consulting, software development, and related services to attract new clients and enhance the company's online presence.",
    description_de:
      "Entwicklung einer professionellen und benutzerfreundlichen Website, die die Expertise des Unternehmens in den Bereichen IT-Beratung, Softwareentwicklung und damit verbundene Dienstleistungen präsentiert, um neue Kunden zu gewinnen und die Online-Präsenz des Unternehmens zu verbessern.",
    technologies: [
      "html5",
      "css3",
      "sass",
      "bootstrap5",
      "angular",
      "js",
      "typescript",
    ],
    image: innov8Mockup,
    deploymenturl: "https://innov-8.netlify.app/",
    githuburl: "https://github.com/JayashRSY/innov8",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // {
  //   title: "KalaBhavan",
  //   description:
  //     "Kalabhavan ist eine dynamische E-Commerce-Plattform, die auf Künstler und Administratoren zugeschnitten ist, um maßgeschneiderte Metallposter zu präsentieren, zu verwalten und zu verkaufen. Die Website erleichtert Benutzeranmeldungen, Design-Uploads und eine optimierte Verwaltung von Posterdesigns und bietet einen lebendigen Marktplatz für Kunstliebhaber.",
  //   description_EN:
  //     "Kalabhavan is a dynamic e-commerce platform tailored for artists and administrators to showcase, manage, and sell customized metal posters. The website facilitates user sign-ups, design uploads, and streamlined management of poster designs, providing a vibrant marketplace for art enthusiasts.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "REST Api", icon: apiicon },
  //     { name: "JWT", icon: jwticon },
  //     { name: "Angular", icon: angularicon },
  //     { name: "Node.js", icon: nodejsicon },
  //   ],
  //   image: kalabhavanMockup,
  //   deploymenturl: "https://kalabhavan.vercel.app/",
  //   githuburl: "https://github.com/JayashRSY/displate-fe",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#70B9BE",
  //   },
  // },
  {
    title: "WinPlay",
    description:
      "The WinPlay is an engaging real-time betting application developed using the MEAN stack (MongoDB, Express.js, Angular, Node.js) and WebSocket technology. This application allows multiple users to place bets on different colors and view live betting results instantly.",
    description_de:
      "Die WinPlay-App ist eine fesselnde Echtzeit-Wettanwendung, die mit dem MEAN-Stack (MongoDB, Express.js, Angular, Node.js) und WebSocket-Technologie entwickelt wurde. Diese Anwendung ermöglicht es mehreren Benutzern, Wetten auf verschiedene Farben abzuschließen und die Live-Wettergebnisse sofort einzusehen.",
    technologies: [
      "angular",
      "nodejs",
      "mongodb",
      "js",
      "typescript",
      "materialui",
    ],
    image: winplayMockup,
    deploymenturl: "https://winplay-fe.vercel.app/",
    githuburl: "https://github.com/JayashRSY/winplay-fe",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: "Task Tracker",
    description:
      "Full Stack Task Tracker app, offering intuitive user interface and comprehensive features for efficient task tracking and collaboration.",
    description_de:
      "Full Stack Task Tracker-App mit intuitiver Benutzeroberfläche und umfassenden Funktionen für effiziente Aufgabenverfolgung und Zusammenarbeit.",
    technologies: [
      "angular",
      "nodejs",
      "mongodb",
      "js",
      "typescript",
      "materialui",
    ],

    image: taskMockup,
    deploymenturl: "https://task-tracker-fe-mu.vercel.app/",
    githuburl: "https://github.com/JayashRSY/task-tracker-fe",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  // {
  //   title: "Kanban Board",
  //   description:
  //     "Effortlessly manage tasks with our Kanban Board project, providing a visual workflow for organizing tasks, enhancing productivity, and fostering team collaboration.",
  //   description_de:
  //     "Verwalten Sie mühelos Aufgaben mit unserem Kanban-Board-Projekt, das einen visuellen Workflow zum Organisieren von Aufgaben, zur Steigerung der Produktivität und zur Förderung der Teamzusammenarbeit bietet.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "Netlify", icon: netlifyicon },
  //   ],
  //   image: kanbanMockup,
  //   deploymenturl: "https://jrsy-kanban-board.netlify.app/",
  //   githuburl: "https://github.com/JayashRSY/kanban-board",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#FFD5BD",
  //   },
  // },
  // {
  //   title: "Coding Go",
  //   description:
  //     "Empower coding on-the-go with our web-based responsive compiler project, enabling developers to write, compile, and test code across devices with ease and efficiency.",
  //   description_de:
  //     "Ermöglichen Sie das Programmieren unterwegs mit unserem webbasierten, reaktionsschnellen Compiler-Projekt, das es Entwicklern ermöglicht, Code geräteübergreifend einfach und effizient zu schreiben, zu kompilieren und zu testen.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //     { name: "REST Api", icon: apiicon },
  //   ],
  //   image: codingMockup,
  //   deploymenturl: "https://coding-go.netlify.app/compiler",
  //   githuburl: "https://github.com/JayashRSY/codingo",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
  {
    title: "Dice Game",
    description:
      "Engage in thrilling gameplay with our 2-player dice game project, offering interactive fun and strategic challenges for players of all ages.",
    description_de:
      "Erlebe aufregendes Gameplay mit unserem 2-Spieler-Würfelspielprojekt, das interaktiven Spaß und strategische Herausforderungen für Spieler jeden Alters bietet.",
    technologies: ["html5", "css3", "js", "jquery"],
    image: diceMockup,
    deploymenturl: "https://rollmydice.netlify.app/",
    githuburl: "https://github.com/JayashRSY/dice-game",
    githubicon: FiGithub,
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
  // {
  //   title: "City Search",
  //   description:
  //     "Explore cities effortlessly with our Smart City Search project, featuring a simple yet powerful autocomplete function for seamless navigation and discovery.",
  //   description_de:
  //     "Erkunden Sie Städte mühelos mit unserem Smart City Search-Projekt, das eine einfache, aber leistungsstarke Autovervollständigungsfunktion für eine nahtlose Navigation und Entdeckung bietet.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //   ],
  //   image: cityMockup,
  //   deploymenturl: "https://smartcitysearch.netlify.app/",
  //   githuburl: "https://github.com/JayashRSY/city-smart-search",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
  // {
  //   title: "Github User Finder",
  //   description:
  //     "Easily discover GitHub users with our user finder project, providing a streamlined search experience to locate developers and explore their profiles quickly.",
  //   description_de:
  //     "Entdecken Sie GitHub-Benutzer ganz einfach mit unserem Benutzerfinder-Projekt, das eine optimierte Sucherfahrung bietet, um Entwickler zu finden und ihre Profile schnell zu erkunden.",
  //   technologies: [
  //     { name: "Html", icon: htmlicon },
  //     { name: "CSS", icon: cssicon },
  //     { name: "JavaScript", icon: javascripticon },
  //   ],
  //   image: gitUserMockup,
  //   deploymenturl: "https://githubuserfinder.vercel.app/",
  //   githuburl: "https://github.com/JayashRSY/fyle-internship-challenge-23",
  //   githubicon: FiGithub,
  //   deploymenticon: FiLink,
  //   colors: {
  //     main: "main-btn",
  //     second: "secondary-btn",
  //     icon: "white",
  //     projectcolor: "#E3964A",
  //   },
  // },
] as const;

export const liveTickerData = {
  content: {
    de: "Weitere Projekte auf Github",
    en: "More Projects on Github",
  },
} as const;

export const skillsDataWeb = [
  {
    skillsTitle: "WebDevelopment",
    skills: [
      {
        title: "HTML",
        hash: "#html",
        icon: htmlicon,
        color: "#F1662A",
      },
      {
        title: "CSS",
        hash: "#CSS",
        icon: cssicon,
        color: "#1572B6",
      },
      {
        title: "JavaScript",
        hash: "#JavaScript",
        icon: javascripticon,
        color: "#F7DF1E",
      },
      {
        title: "TypeScript",
        hash: "#TypeScript",
        icon: typescripticon,
        color: "#007ACC",
      },
      {
        title: "Angular",
        hash: "#Angular",
        icon: angularicon,
        color: "#F44336",
      },
      {
        title: "React",
        hash: "#React",
        icon: reacticon,
        color: "#61DAFB",
      },
      {
        title: "Next.js",
        hash: "#Next.js",
        icon: [nextjsicon, nextjsiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "Node.js",
        hash: "#Node.js",
        icon: nodejsicon,
        color: "#339933",
      },
      {
        title: "Express",
        hash: "#Express",
        icon: [expressicon, expressiconwhite],
        color: ["#000000", "#FFFFFF"],
      },
      {
        title: "SASS/SCSS",
        hash: "#SASS/SCSS",
        icon: sassscssicon,
        color: "#CC6699",
      },
      {
        title: "Bootstrap",
        hash: "#Bootstrap",
        icon: bootstrapicon,
        color: "#7952B3",
      },
      {
        title: "Tailwind",
        hash: "#Tailwind",
        icon: tailwindcssicon,
        color: "#38B2AC",
      },
      {
        title: "ChakraUI",
        hash: "#ChakraUI",
        icon: chakrauiicon,
        color: "#48C8C2",
      },
      {
        title: "Redux",
        hash: "#Redux",
        icon: reduxicon,
        color: "#764ABC",
      },
      {
        title: "MongoDB",
        hash: "#MongoDB",
        icon: mongodbicon,
        color: "#449C45",
      },
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#366F9E",
      },
      {
        title: "AWS",
        hash: "#AWS",
        icon: awsicon,
        color: "#CC6699",
      },
    ],
  },
] as const;

export const skillsDataDesign = [
  {
    skillsTitle: "Design",
    skills: [
      { title: "Figma", hash: "#Figma", icon: figmaicon, color: "#F24E1E" },
      {
        title: "Adobe XD",
        hash: "#Adobe XD",
        icon: adobexdicon,
        color: "#FF61F6",
      },
      { title: "Canva", hash: "#Canva", icon: canvaicon, color: "#00C4CC" },
    ],
  },
] as const;

export const skillsDataCMS = [
  {
    skillsTitle: "CMS",
    skills: [
      {
        title: "WordPress",
        hash: "#WordPress",
        icon: wordpressicon,
        color: "#21759B",
      },
      {
        title: "Shopify",
        hash: "#Shopify",
        icon: shopifyicon,
        color: "#7AB55C",
      },
      {
        title: "Webflow",
        hash: "#Webflow",
        icon: webflowicon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { de: "Home", en: "Home", hash: "#home", icon: GoHome },
  { de: "Skills", en: "Skills", hash: "#skills", icon: GoStack },
  { de: "Projekte", en: "Projects", hash: "#projects", icon: GoProject },
  { de: "Bildung", en: "Education", hash: "#education", icon: GoPaperclip },
  { de: "Über mich", en: "About me", hash: "#about-me", icon: GoPerson },
  { de: "Kontakt", en: "Contact", hash: "#contact", icon: GoMail },
] as const;

export const FooterLinks = [
  { de: "Impressum", en: "Imprint", hash: "#imprint", data: <Imprint /> },
  { de: "Datenschutz", en: "Privacy", hash: "#privacy", data: <Privacy /> },
] as const;

export const sideBarRightMail = {
  link: "mailto:jayash.work@gmail.com",
  text: "jayash.work@gmail.com",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/JayashRSY/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://github.com/JayashRSY",
    icon: FiGithub,
    altimgname: "github",
  },
  {
    link: "https://instagram.com/JayashRSY",
    icon: FiInstagram,
    altimgname: "instagram",
  },
  {
    link: "https://www.twitter.com/jayashrsy/",
    icon: FiTwitter,
    altimgname: "twitter",
  },
  {
    link: "mailto:jayash.work@gmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    de: '"Es ist überhaupt nicht wichtig, es beim ersten Mal richtig zu machen. Es ist entscheidend, es beim letzten Mal richtig zu machen."',
    en: `"It's not at all important to get it right the first time. It's vitally important to get it right the last time."`,
    author: "Andrew Hunt",
  },
  {
    de: '"Das Web ist wie eine Leinwand und der Code ist die Farbe. Erschaffe dein Meisterwerk."',
    en: `"The web is like a canvas, and code is the paint. Create your masterpiece."`,
  },
] as const;

export const aboutMeData = {
  title: "Über mich",
  title_EN: "About me",
  description: "Ein paar Codeschnippsel über mich",
  description_EN: "A few code snippets about me",
  paragraphs_DE: [
    {
      title: "Die Schaltkreise meines Herzens",
      description:
        "Wenn ich nicht in der digitalen Welt unterwegs bin, durchstreife ich die faszinierende Welt der Technik und Hardware. Schaltkreise und Lötstellen sind für mich wie Puzzleteile eines aufregenden Abenteuers.",
      icon: hardwareicon,
    },
    {
      title: "Auf der Überholspur des Lebens",
      description:
        "Neben dem Coden befinde ich mich gerne auf der Überholspur – im wahrsten Sinne des Wortes. Autos sind meine Leidenschaft, und ich genieße es, mit PS-starken Maschinen auf unbekannten Straßen unterwegs zu sein.",
      icon: caricon,
    },
    {
      title: "Entdeckungsfreude als Lebensmotto",
      description:
        "Meine Reise als Webentwickler ist nur ein Teil meines Lebenswegs. Ich lebe nach dem Motto, dass das Abenteuer erst beginnt, wenn man das Bekannte hinter sich lässt. Das Entdecken neuer Orte ist meine Form der kreativen Inspiration.",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      title: "The Circuits of My Heart",
      description:
        "Tech enthusiast by day, digital explorer by night—I'm the fearless adventurer navigating the ever-evolving landscape of technology, where every new gadget is a treasure waiting to be discovered",
      icon: hardwareicon,
    },
    {
      title: "On the Fast Lane of Life",
      description:
        "Besides coding, I like gaming. In the realm of gaming, I'm not just a player—I'm the hero of countless digital adventures, where every victory is a triumph and every defeat a lesson in resilience and determination.",
      icon: caricon,
    },
    {
      title: "The Joy of Discovery as a Life Motto",
      description:
        "My journey as a web developer is only a part of my life path. I live by the motto that the adventure only begins when you leave the familiar behind. Discovering new hobbies and self improvement is my form of creative inspiration.",
      icon: travelicon,
    },
  ],
};
export const educationData = {
  title: "Bildung",
  title_EN: "Education",
  description: "Details zu meiner Ausbildung",
  description_EN: "My Education details",
  paragraphs_DE: [
    {
      degree: "B.Tech (Hons.)",
      institute: "Dr. A.P.J. Abdul Kalam Technical University",
      start: "2019",
      end: "2023",
      icon: hardwareicon,
    },
    {
      degree: "Higher Secondary",
      institute: "St. Dominic's Academy",
      start: "2018",
      end: "2019",
      icon: caricon,
    },
    {
      degree: "High School",
      institute: "St. Dominic's Academy",
      start: "2016",
      end: "2017",
      icon: travelicon,
    },
  ],
  paragraphs_EN: [
    {
      degree: "B.Tech (Hons.)",
      institute: "Dr. A.P.J. Abdul Kalam Technical University",
      start: "2019",
      end: "2023",
      icon: hardwareicon,
    },
    {
      degree: "Higher Secondary",
      institute: "St. Dominic's Academy",
      start: "2018",
      end: "2019",
      icon: caricon,
    },
    {
      degree: "High School",
      institute: "St. Dominic's Academy",
      start: "2016",
      end: "2017",
      icon: travelicon,
    },
  ],
};

export const contactData = {
  title: {
    de: "Kontakt",
    en: "Contact",
  },
  description: {
    de: "Schreib mir eine Nachricht und ich melde mich bei dir.",
    en: "Write me a message and I will get back to you.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        de: "Dein Name",
        en: "Your Name",
      },
      type: "text",
      validation: {
        de: "Bitte gebe deinen Namen ein",
        en: "Please fill in your name",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        de: "Deine E-Mail Adresse",
        en: "Your E-Mail",
      },
      type: "email",
      validation: {
        de: "Bitte gebe deine Email ein",
        en: "Please fill in your email",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        de: "Deine Betreff",
        en: "Your Subject",
      },
      type: "text",
      validation: {
        de: "Bitte gebe einen Betreff ein",
        en: "Please fill in your subject",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      de: "Deine Nachricht",
      en: "Your Message",
    },
    name: "message",
    rows: 10,
    validation: {
      de: "Bitte gebe deine Nachricht ein",
      en: "Please fill in your message",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      de: "Absenden",
      en: "Send",
    },
  },
  cta: {
    de: "Senden",
    en: "Send",
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      de: "Ich stimme zu, dass Jayash meine personenbezogenen Daten (Name und E-Mail-Adresse) verwenden darf, um mit mir Kontakt aufzunehmen.",
      en: "I agree that Jayash may use my personal data (name and e-mail address) to contact me.",
    },
    description: {
      de: "Durch Übermittlung dieser Anfrage bestätigen Sie, dass Sie die Datenschutzerklärung gelesen haben",
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    de: "🦄 Die Live Demo wird gleich geöffnet. Server werden gestartet...",
    en: "🦄 The live demo will open shortly. Starting servers...",
  },
  successEmailSent: {
    de: "🦄 Vielen Dank für deine Email. Ich werde mich schnellstmöglich bei dir melden",
    en: "🦄 Thank you for your email. I will get back to you as soon as possible",
  },
  failedEmailSent: {
    de: "🦄 Leider hat der Versand deiner Email nicht geklappt. Bitte versuche es später noch einmal",
    en: "🦄 Unfortunately the sending of your email did not work. Please try again later",
  },
  failedValidationName: {
    de: "Bitte gebe deinen Namen ein",
    en: "Please fill in your name",
  },
} as const;

export const buttonLabels = {
  language: {
    de: "DE",
    en: "EN",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
