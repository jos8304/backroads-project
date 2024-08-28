import Title from "./Title";
import { tours } from "../data";
const Tours = () => {
  return (
    <section className="section" id="personal_project">
      <Title title="personal" subTitle="project" />
      <div className="section-center featured-center">
        {tours.map((tour) => {
          return (
            <article className="tour-card" key={tour.id}>
              <a href={tour.href} target="_blank" className="nav-link">
                {tour.text}

                <div className="tour-img-container">
                  <img src={tour.image} className="tour-img" alt="" />
                  {/* <p className="tour-date">{tour.date}</p> */}
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{tour.title}</h4>
                  </div>
                  <p>{tour.info}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-solid fa-code"></i>
                      </span>{" "}
                      {tour.location}
                    </p>
                    {/* <p>{tour.duration} days</p>
                  <p>from ${tour.price}</p> */}
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
