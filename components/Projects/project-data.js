const projectsData = [
  {
    img: "/static/images/projects/student-data.jpg",
    alt: "student data",
    href: "https://www.studentdata.dev",
    heading: "studentdata.dev",
    techStack: ["React", "Express", "MySql", "AWS", "Stripe"],
    bullets: [
      "Executed in 5 weeks, with a team of 5 full stack web developersv",
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
