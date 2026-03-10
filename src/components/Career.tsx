import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Software Trainee</h4>
                <h5>Moh10 Technologies</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Designed and developed scalable backend systems using Java
              and Spring Boot, including a full CRUD Employee Management System
              with structured REST APIs. Integrated a Speech-to-Text feature using
              the Web Speech API with a Spring Boot backend to enhance accessibility
              in the Jyotsna application. Built responsive UI components using
              HTML, CSS, and JavaScript, seamlessly connecting them with backend APIs.
              Performed automation testing with Selenium WebDriver for the Lyncc web application,
              improving software quality, while actively collaborating with cross-functional
              teams in an Agile development environment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Science Intern</h4>
                <h5>Unified Mentor Private Limited</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Engineered and optimized machine learning pipelines using Python, Scikit-learn,
              and Pandas, improving predictive accuracy by 15% on real-world datasets.
              Conducted exploratory data analysis and feature engineering to uncover trends
              and deliver insights through Matplotlib and Seaborn visualizations,
              while following responsible AI practices including data normalization, bias
              reduction, and robust model validation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
