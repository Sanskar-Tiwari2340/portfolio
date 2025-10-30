// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Education Section Logo's
import sjaLogo from './assets/education_logo/sja_logo.jpg';
import jaipuriaLogo from './assets/education_logo/jaipuria_logo.jpg';
import unitedLogo from './assets/education_logo/united_logo.jpg';

// Project Section Logo's
import tastybitesLogo from './assets/work_logo/TastyBites.png';
import notetakingLogo from './assets/work_logo/NoteTaking.png';
import todoappLogo from './assets/work_logo/ToDo App.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
export const education = [
  {
    id: 0,
    img: unitedLogo,
    school: "United College of Engineering, A-31, UPSIDC Industrial Area, Naini, Prayagraj, Chak Noor, Uttar Pradesh 211010",
    date: "Expected Graduation: 2026",
    grade: "73.2%",
    desc: "I completed my Bachelor of Computer Application (BCA) from United College of Engineering, A-31, UPSIDC Industrial Area, Naini, Prayagraj, Chak Noor, Uttar Pradesh 211010. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at United College of Engineering allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "Bachelor of Computer Application - BCA",
  },
  {
    id: 1,
    img: jaipuriaLogo,
    school: "Jaipuria School, Naini, Chak Babura Alimabad, Kajipur, Uttar Pradesh 211010",
    date: "Apr 2022 - March 2023",
    grade: "75%",
    desc: "I completed my class 12 education from Jaipuria School, Naini, Chak Babura Alimabad, Kajipur, Uttar Pradesh 211010, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science. This academic experience provided me with a strong foundation in scientific principles and mathematical concepts, which are essential for my career in technology and software development. The curriculum emphasized analytical thinking, problem-solving, and practical applications of theoretical knowledge, preparing me for further studies in computer science and related fields.",
    degree: "CBSE(XII) - PCM with Computer Science",
  },
  {
    id: 2,
    img: sjaLogo,
    school: "Saint John's Academy (SJA), Mirzapur Road, Karchana, Prayagraj",
    date: "Apr 2020 - March 2021",
    grade: "74.5%",
    desc: "I completed my class 10 education from Saint John's Academy (SJA), Mirzapur Road, Karchana, Prayagraj, under the ICSE board, where I studied Science with Computer. This period of my education was crucial in shaping my interest in technology and computer science. The curriculum provided a comprehensive understanding of fundamental scientific concepts and introduced me to the basics of computer applications. My time at Saint John's Academy helped me develop a disciplined approach to learning and fostered a curiosity for exploring the world of computers and technology.",
    degree: "ICSE(X), Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "TastyBites Restaurant Application",
    description: "A powerful and user-friendly React.js application designed to uncover and showcase detailed restaurant information.",
    image: tastybitesLogo,
    tags: ["MongoDB", "Express", "React JS", "Node.js", "Tailwind CSS", "JavaScript"],
    github: "https://github.com/Sanskar-Tiwari2340/tastybites-restaurant-application",
    webapp: "https://tastybites-app.onrender.com/",
  },
  {
    id: 1,
    title: "Note Taking Application",
    description: "A full-stack note-taking application that allows users to create, edit, and delete notes. The app features a user-friendly interface and utilizes a RESTful API for seamless data management.",
    image: notetakingLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Tailwind CSS", "HTML", "JavaScript"],
    github: "https://github.com/Sanskar-Tiwari2340/note-taking-app",
    webapp: "https://note-app-frontend-v3te.onrender.com/",
  },
  {
    id: 2,
    title: "Todo Application",
    description: "A simple and intuitive Todo Application built with React.js that allows users to manage their tasks efficiently. Users can add, edit, delete, and mark tasks as completed.",
    image: todoappLogo,
    tags: ["React JS", "CSS", "HTML", "JavaScript"],
    github: "https://github.com/Sanskar-Tiwari2340/todo-application",
    webapp: "https://todo-app-mern-6yvv.onrender.com/",
  }
];  