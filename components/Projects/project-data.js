const projectsData = [
  {
    img: "/static/images/projects/rate-it-yourself.jpg",
    alt: "rate it yourself",
    href: "https://how-tutor.netlify.com/",
    heading: "Rate It Yourself",
    techStack: ["React","Redux","Express","PassportJS","Postgres","Bootstrap"],
    bullets: [
      "Team Lead overseeing the development by 4 web developers, 1 iOS developer, and 1 UI/UX designer",
      "Created reusable components, with Bootstrap elements to match the designers vision",
      "Used Filepond to implement drag and drop image uploads",
      "Redux used to handle all data manipulation and actions in a 1 way data flow"
    ],
    source: "https://github.com/labs13-how-to"
  },
  {
    img: "/static/images/projects/moodi-beats.jpg",
    alt: "moody beats",
    href: "https://moodibeats.com/",
    heading: "Moodi Beats",
    techStack: ["React","Express","Django","StyledComponents","Postgres"],
    bullets: [
      "Team Lead overseeing the development by 5 web developers, and 2 data scientists",
      "Google API used for authentication and YouTube integration",
      "Django back end created with DS models to sort songs by mood",
      "Chronjob set up to automatically search for new royalty free instrumentals, analyze mood, and add to collection autonomously over time "
    ],
    source: "https://github.com/labs11-studentdata"
  },
  {
    img: "/static/images/projects/student-data.jpg",
    alt: "student data",
    href: "https://www.studentdata.dev",
    heading: "studentdata.dev",
    techStack: ["React", "Express", "MySql", "AWS", "Stripe"],
    bullets: [
      "Executed in 5 weeks, with a team of 5 full stack web developers",
      "OAuth and Passport.js used for authentication with Google",
      "Stripe used to process payments",
      "MySQL database volume managed with Amazon Web Services"
    ],
    source: "https://github.com/labs11-studentdata"
  },
  {
    img: "/static/images/projects/salty-trolls.jpg",
    alt: "salty hackers",
    href: "https://saltyhackers.com/",
    heading: "Salty Trolls",
    techStack: ["React", "Express", "Flask", "TextBlob"],
    bullets: [
      "Executed in 5 days, with a team of 7, composed of Front End, Back End, AI, and UX developers",
      "Managed over all flow and problem solving, serving as team lead for any Git issues",
      "TextBlob speech analyzer used to provide comment sentiment scores",
      "Created a custom SVG logo set to brand the application"
    ],
    source: "https://github.com/saltytrolls-bw-may-19"
  },
  {
    img: "/static/images/projects/drum-seq.jpg",
    alt: "drum sequencer",
    href: "https://nervous-carson-701b20.netlify.com/",
    heading: "Drum Sequencer",
    techStack: ["React", "AudioContext", "Styled Components"],
    bullets: [
      "Created in just 48 hours with a team of 5 full stack developers for Lambda Schools Summer Hackathon 2018",
      "Used the built in browser AudioContext API to synthesize all drum sounds, and build all audio effects",
      "Personally responsible for creating the UI after 5 weeks of react training"
    ],
    source: "https://github.com/runranron/drum-machine"
  }
];

export default projectsData;
