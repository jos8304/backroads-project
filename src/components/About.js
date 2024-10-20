import aboutImg from "../images/aboutme.jpg";
import Title from "./Title";

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="about" subTitle="me" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>IT Professional Developer</h3>
          <p>
            Experienced IT professional with a solid background in web
            development, database management, and technical support. Proficient
            in various programming languages and technologies including HTML,
            PHP, JavaScript, CSS, React, NEXT.js, Python, and Django.
            Demonstrated expertise in developing web-based software, automating
            tasks, and providing technical support in both team-oriented and
            individual capacities. Proven ability to troubleshoot and resolve
            technical issues efficiently, with strong communication skills to
            effectively interact with team members, supervisors, and clients.
          </p>

          <a href="#experience" className="btn">
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
export default About;
