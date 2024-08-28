import Title from "./Title";

const Experience = () => {
  return (
    <section className="section" id="experience">
      <Title title="Professional" subTitle="Experience" />

      <div className="section-center about-center">
        <article className="experience">
          <h2>Project Engineer, Nexien Inc</h2>
          <p>
            <strong>August 2021 – Present</strong>
          </p>
          <ul>
            <li>
              Provided maintenance, technical support, and troubleshooting for
              Faregate in the Washington D.C. Metro system
            </li>
            <li>Developed a file-sharing website for WMATA using Django</li>
            <li>
              Managed numerous reports with file automation in Python
              <ul>
                <li>Packages: openpyxl, shutil, os, and pandas</li>
              </ul>
            </li>
            <li>Developed import and export report program using Django</li>
            <li>
              Worked in a team-based environment, communicating effectively and
              respectfully with supervisors and management
            </li>
            <li>
              Sent an incident resolution report by email using the bulk-mail
              system developed by Django
            </li>
            <li>
              Installed and managed Docker images on station computers at each
              station
            </li>
          </ul>
        </article>
        <article className="experience">
          <h2>IT Associate, Rhee Bros Inc</h2>
          <p>
            <strong>November 2020 – August 2021</strong>
          </p>
          <ul>
            <li>
              Provided maintenance, technical support, and troubleshooting for
              desktop computers, printers, telephones, and other devices to
              ensure effective use of technology
            </li>
            <li>
              Managed and assisted with the maintenance of Microsoft Navision
              (NAV) and HandApps software
            </li>
            <li>Performed Active Directory Domain Services and management</li>
            <li>
              Worked in a team-based environment and communicated effectively
              and respectfully with supervisors and management
            </li>
          </ul>
        </article>
        <article className="experience">
          <h2>
            IT Staff, Korean-American Scientists and Engineers Association
            (KSEA)
          </h2>
          <p>
            <strong>May 2013 – December 2018</strong>
          </p>
          <ul>
            <li>
              Developed, coded, and tested web-based software using ASP.NET,
              HTML 5.0, PHP, JavaScript (jQuery), CSS, and CMS systems
              (WordPress or Drupal)
            </li>
            <li>
              Designed and deployed database architecture and systems
              infrastructure (MSSQL)
            </li>
            <li>
              Created strategies for performing repetitive tasks such as data
              acquisitions, migrations, data recoveries, and new database
              implementations
            </li>
            <li>
              Worked with a taskforce team to resolve issues resulting from
              pre-live testing
            </li>
            <li>
              Performed daily maintenance updates for existing sites and
              applications
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};
export default Experience;
