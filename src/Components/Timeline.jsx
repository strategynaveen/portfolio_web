import { VerticalTimeline, VerticalTimelineElement, } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { journeyData } from "../Constants/index";

function Timeline() {
  return (
    <section>
      <VerticalTimeline lineColor="rgba(156, 163, 175, 0.5)">
        {journeyData.map((val, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "white",
              boxShadow: "none",
              border: "2px solid rgba(156, 163, 175, 0.5)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid rgba(156, 163, 175, 0.7)",
            }}
            date={val.date}
            icon={val.icon}
            iconStyle={{
              background: "white",
              borderColor: "rgba(156, 163, 175, 0.5)",
              color: "#3b82f6",
            }}
          >
            <h3 className="font-normal font-montserrat capitalize ">
              {val.title}
            </h3>
            <p className="font-rubik text-xl  font-semibold  ">
              {val.institution}
            </p>
            <p className=" font-montserrat capitalize !mt-0">{val.location}</p>
            <p className="font-semibold font-palanquin capitalize ">
              {" "}
              {val.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
