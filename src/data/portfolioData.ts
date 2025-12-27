export const personalInfo = {
  name: "Chamith Mendis",
  title: "Full Stack Software Engineer", // DevOps Engineer | Full Stack Developer
  tagline:
    "Senior Full-Stack Engineer with 4+ years building enterprise systems using modern technologies for global clients.",
  email: "chamithmendis25@gmail.com",
  github: "https://github.com/ChamithMendis",
  linkedin: "https://www.linkedin.com/in/chamithmendis/",
};

export const aboutMe = {
  description: `I am a Full Stack Software Engineer experienced in building enterprise grade applications using Angular, React, Spring Boot, and microservices. 
                Over the past few years, I have contributed to complex platforms ranging from large scale systems and financial solutions to interactive conference platforms.
                My expertise spans the entire software development lifecycle, including requirement analysis, architecture design, frontend and backend development, 
                system integration, database engineering, deployments, and production issue resolution. I am passionate about solving real-world problems, 
                collaborating closely with clients, and delivering scalable, reliable, and user-friendly applications.`,
  highlights: [
    "5+ years in Full Stack Software Engineering",
    "UAT & PRODUCTION support for Issue fixes and CR developments",
    "Build, test and deploy systems.",
    "Team mentoring, guiding juniors and work reviews",
  ],
};

export const skills = {
  backend: ["Java (Spring Boot)", "Node.js"], // "Python", "Go"
  frontend: ["Angular", "React", "TypeScript", "JavaScript"],
  databases: ["Oracle", "MySQL", "MongoDB"],
  cicd: ["GitHub Actions"], // , "GitLab CI", "Jenkins", "CircleCI"
  containerization: ["Docker", "Docker Compose"], // , "Podman"
  // orchestration: ["Kubernetes", "Helm", "K3s"],
  cloud: ["AWS", "GCP"], // , "Azure", "DigitalOcean"
  // iac: ["Terraform", "Ansible", "CloudFormation"],
  // monitoring: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  other: ["Git", "Linux"], // , "Bash", "Nginx"
};

export const projects = [
  {
    id: 1,
    title:
      "Angular / Spring Boot based Online Book Store (Limited Functionality)",
    description: `This full-stack bookstore app dashboard uses AWS EC2, RDS for hosting, database. 
                  It demonstrates deployment and configuration of a production-ready cloud-native system.`,
    techStack: [
      "Angular",
      "SpringBoot / Spring Security",
      "REST",
      "AWS (EC2/S3)",
      "MYSql",
    ],
    github: "https://github.com/ChamithMendis/online-bookstore",
    demo: "#",
  },
  {
    id: 2,
    title: "Spring Boot Based Microservices Project",
    description: `This project implements an architecture composed of multiple services which communicate using REST / Spring Cloud stack.`,
    techStack: [
      "SpringBoot / Spring Cloud Gateway",
      "REST",
      "MYSql / MongoDB",
      "Kafka",
      "Docker",
    ],
    github: "https://github.com/ChamithMendis/microservices-project",
    demo: "#",
  },
  // {
  //   id: 2,
  //   title: "Microservices Monitoring Platform",
  //   description:
  //     "Built a comprehensive monitoring solution using Prometheus and Grafana for a microservices architecture running on Kubernetes.",
  //   techStack: ["Kubernetes", "Prometheus", "Grafana", "Docker"],
  //   github: "https://github.com/johndoe/monitoring-platform",
  //   demo: "#",
  // },
  // {
  //   id: 3,
  //   title: "CI/CD Pipeline for Spring Boot",
  //   description:
  //     "Designed and implemented a complete CI/CD pipeline for Java Spring Boot applications with automated testing and deployment to production.",
  //   techStack: ["Jenkins", "Docker", "Spring Boot", "AWS ECS"],
  //   github: "https://github.com/johndoe/spring-cicd",
  //   demo: "#",
  // },
  // {
  //   id: 4,
  //   title: "E-Commerce Platform",
  //   description:
  //     "Full-stack e-commerce application with React frontend, Spring Boot backend, and MySQL database. Deployed on Kubernetes with automated scaling.",
  //   techStack: ["React", "Spring Boot", "MySQL", "Kubernetes"],
  //   github: "https://github.com/johndoe/ecommerce-platform",
  //   demo: "#",
  // },
  // {
  //   id: 5,
  //   title: "Log Aggregation System",
  //   description:
  //     "Implemented centralized logging using ELK Stack (Elasticsearch, Logstash, Kibana) for distributed microservices architecture.",
  //   techStack: ["Elasticsearch", "Logstash", "Kibana", "Docker"],
  //   github: "https://github.com/johndoe/log-aggregation",
  //   demo: "#",
  // },
  // {
  //   id: 6,
  //   title: "Infrastructure as Code Templates",
  //   description:
  //     "Reusable Terraform modules for common cloud infrastructure patterns including VPC, EKS clusters, RDS, and load balancers.",
  //   techStack: ["Terraform", "AWS", "GCP", "Azure"],
  //   github: "https://github.com/johndoe/iac-templates",
  //   demo: "#",
  // },
];

export const experiences = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "DirectFN Sri Lanka (DFN Technology)",
    period: "May 2021 - Present",
    responsibilities: [
      "Developed enterprise web applications using Angular, Spring Boot, and Oracle DB.",
      "Provided onsite production support and collaborated directly with international clients",
      "Created REST APIs, UI modules, and handled system integrations",
      "Led feature development, code reviews, and mentored junior engineers",
      "Managed deployments, production issue resolutions, and performance improvements",
      "Led data migration activities for projects and played an active role in Go-Live events",
      "Worked Onsite on Saudi Arabia for around 1 year directly collaborating with client",
    ],
    technologies: "Angular , Spring Boot , Oracle DB , BitBucket , Linux",
  },
  {
    id: 2,
    title: "Intern - Full Stack",
    company: "Inova IT Systems",
    period: "Oct 2020 - Apr 2021",
    responsibilities: [
      `Contributed to the full-stack development of the project ETFB, a web based application. 
      Responsibilities included requirements gather and analysis, system design, development, integrations, testing, and 
      bug fixing, allowing me to gain hands-on experience across the full software development lifecycle`,
    ],
    technologies: "Angular, Spring Boot",
  },
  // {
  //   id: 3,
  //   title: "Full Stack Developer",
  //   company: "Software Systems Co.",
  //   period: "2018 - 2020",
  //   responsibilities: [
  //     "Developed enterprise web applications using Angular and Spring Boot",
  //     "Designed RESTful APIs and integrated with Oracle and MySQL databases",
  //     "Implemented automated testing strategies (unit, integration, e2e)",
  //     "Participated in agile development practices and code reviews",
  //   ],
  // },
];

export const otherExperiences = [
  {
    id: 1,
    title: "Full Stack Developer – Part Time",
    company: "TESS-TA OCR System",
    period: "Apr 2019 - Apr 2021",
    responsibilities: [
      `Worked part-time on TESS-TA, a web-based Optical Character Recognition (OCR) system supporting Sinhala, English, and Tamil. 
      Responsibilities included implementing new features based on client requirements, dockerizing the application for deployment 
      across multiple environments with proper configurations, and hosting the system on Google Cloud Platform (GCP).`,
    ],
    technologies: "Spring Boot, ReactJs, MySQL, Docker, Git",
  },
  {
    id: 2,
    title: "Full Stack Developer – Part Time",
    company: "Sri Lanka Foundation Virtual Conference Platform",
    period: "May 2021 - Sep 2021",
    responsibilities: [
      `Developed a virtual conference platform for, Sri Lanka Foundation. 
      The platform hosted a live exhibition successfully, attracting thousands of users who viewed virtual booths, 
      connected with others, and participated in various events`,
    ],
    technologies: "ReactJs, ExpressJs, MongoDB, AWS, Firebase, Git",
  },
];
