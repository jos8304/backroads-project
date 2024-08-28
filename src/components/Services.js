import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="skills">
      <Title title="My" subTitle="skills" />
      <div className="section-center services-center">
        {services.map((link) => {
          return (
            <article className="service">
              <span className="service-icon">
                <i className={link.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{link.title}</h4>
                <p className="service-text">{link.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
