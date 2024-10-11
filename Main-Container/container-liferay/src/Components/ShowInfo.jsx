export default function ShowInfoCont({ tit, desc, level, time, type }) {
  return (
    <li id="lista">
      <h1>{tit}</h1>
      <p>{desc}</p>
      <div className="container-sub-info">
        <div className="sub-info">
          <span>
            <div className="time-content">{time}</div>
          </span>
        </div>
        <div className="sub-info">
          <span className="user-content">{type}</span>
        </div>
        <div className="sub-info">
          <span className="level-content">{level}</span>
        </div>
      </div>
    </li>
  );
}
