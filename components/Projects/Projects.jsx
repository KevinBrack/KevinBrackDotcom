import "./Projects.scss";

const Projects = () => (
  <section className="projects">
    <h2>recent work</h2>
    <div className="grid">
      <div className="grid-image">
        <img src="/static/images/projects/student-data.jpg" alt="" />
      </div>
      <div className="grid-desc">
        <a href="https://www.studentdata.dev" target="blank">
          <h4>studentdata.dev</h4>
        </a>
        <ul>
          <li>[ React ]</li>
          <li>[ Express ]</li>
          <li>[ MySql ]</li>
          <li>[ AWS ]</li>
          <li>[ Stripe ]</li>
        </ul>
        <p>Executed in 5 weeks, with a team of 5 full stack web developers</p>
        <p>OAuth and Passport.js used for authentication with Google</p>
        <p>Stripe used to process payments</p>
        <p>MySQL database volume managed with Amazon Web Services</p>
        <a
          href="https://github.com/labs11-studentdata"
          className="source"
          target="blank"
        >
          SOURCE CODE
        </a>
      </div>
      <div className="grid-image">
        <img src="/static/images/projects/salty-trolls.jpg" alt="" />
      </div>
      <div className="grid-desc">
        <a href="https://saltyhackers.com/" target="blank">
          <h4>saltyhackers.com</h4>
        </a>
        <ul>
          <li>[ React ]</li>
          <li>[ Express ]</li>
          <li>[ Flask ]</li>
          <li>[ TextBlob ]</li>
        </ul>
        <p>
          Executed in 5 days, with a team of 7, composed of Front End, Back End,
          AI, and UX developers
        </p>
        <p>
          Managed over all flow and problem solving, serving as team lead for
          any Git issues
        </p>
        <p>TextBlob speech analyzer used to provide comment sentiment scores</p>
        <p>Created a custom SVG logo set to brand the application</p>
        <a
          href="https://github.com/saltytrolls-bw-may-19"
          className="source"
          target="blank"
        >
          SOURCE CODE
        </a>
      </div>
      <div className="grid-image">
        <img src="/static/images/projects/drum-seq.jpg" alt="" />
      </div>
      <div className="grid-desc">
        <a href="https://nervous-carson-701b20.netlify.com/" target="blank">
          <h4>Drum Sequencer</h4>
        </a>
        <ul>
          <li>[ React ]</li>
          <li>[ AudioContext ]</li>
          <li>[ Styled Components ]</li>
        </ul>
        <p>
          Created in just 48 hours with a team of 5 full stack developers for
          Lambda Schools Summer Hackathon 2018
        </p>
        <p>
          Used the built in browser AudioContext API to synthesize all drum
          sounds, and build all audio effects
        </p>
        <p>
          Personally responsible for creating the UI after 5 weeks of react
          training
        </p>
        <a
          href="https://github.com/runranron/drum-machine"
          className="source"
          target="blank"
        >
          SOURCE CODE
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
