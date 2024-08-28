import Title from "./Title";

const Education = () => {
  return (
    <section className="education" id="education">
      <Title title="Education" subTitle="" />
      <div class="education-item">
        <p>
          <strong>Certification, Lincoln College of Technology</strong> -
          Columbia, MD
        </p>
        <p>
          <em>Air Conditioning, Refrigeration and Heating Technology</em>
        </p>
        <p class="education-date">November 2020</p>
      </div>
      <div class="education-item">
        <p>
          <strong>MS, Towson University</strong> - Towson, MD
        </p>
        <p>
          <em>Computer Science and Programming</em>
        </p>
        <p class="education-date">May 2013</p>
      </div>
      <Title title="Certifications" subTitle="" />
      <div class="certifications-item">
        <p>• Microsoft Technology Associate: Database Fundamentals (2019)</p>
      </div>
      <div class="certifications-item">
        <p>• EPA Section 608</p>
      </div>
      <div class="certifications-item">
        <p>• CompTIA A+ Certification (2021)</p>
      </div>
    </section>
  );
};
export default Education;
