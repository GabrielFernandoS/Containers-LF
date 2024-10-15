import "./App.css";
import { InformationCard } from "./Dados/data-cont-1";
import { InformationCourse } from "./Dados/data-cont-2";
import ShowInfoCont from "./Components/ShowInfo";
import ShowInfoCard from "./Components/Step-card-show";

function App() {
  return (
    <div className="main-container">
      <section>
        <div className="cont-1">
          {InformationCard.map((card) => (
            <ShowInfoCont
              key={card.id}
              tit={card.title}
              desc={card.description}
              time={card.time}
              type={card.type}
              level={card.level}
            ></ShowInfoCont>
          ))}
        </div>
      </section>
      <section>
        <div className="cont-2">
          {InformationCourse.map((course) => (
            <ShowInfoCard
              key={course.id}
              step={course.step}
              title={course.title}
              desc={course.description}
              time={course.time}
            ></ShowInfoCard>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
