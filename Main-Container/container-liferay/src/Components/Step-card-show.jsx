export default function ShowInfoCard({ step, title, desc, time }) {
  return (
    <li>
      <div className="card-container">
        <div className="card-banner">
          <span>
            {" "}
            <span className="video-content"></span>Step {step}
          </span>
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
        <div className="sub-info-card">
          <span className="time-content-card">{time}</span>
        </div>
      </div>
    </li>
  );
}
