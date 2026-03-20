import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>experience</span>
          <br /> & career
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor</h4>
                <h5>Self-Employed</h5>
              </div>
              <h3>2021 – Present</h3>
            </div>
            <p>
              Edited cinematic and storytelling-based videos for YouTube and Instagram.
              Created engaging short-form and long-form content with strong hooks and visual aesthetics.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Creator</h4>
                <h5>Client Projects</h5>
              </div>
              <h3>5 Years Exp</h3>
            </div>
            <p>
              Worked on pacing, transitions, and emotional storytelling to increase viewer retention.
              Designed edits aligned with trending styles, audience preferences, and consistent high-quality output.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
