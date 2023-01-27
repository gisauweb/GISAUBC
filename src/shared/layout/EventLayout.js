import React from "react";
import { CustomButton } from "shared/components/CustomButton";

import "./EventLayout.css";

export const EventLayout = ({
  className,
  title,
  events,
  icon,
  button1,
  button2,
}) => {
  return (
    <div className={className}>
      <div className="uppercase flex items-center">
        <h1 className="title">{title}</h1>
        <div className="events-icon">{icon}</div>
      </div>
      <div className="mt-10">
        {events.map((event, i) => (
          <div className="grid gap-y-8">
            <div>
              <p>{event.desc}</p>
            </div>
            <div>
              <div className="event-img">{event.img}</div>
            </div>
            <div className="grid justify-center">
              <CustomButton name={button1} />
            </div>
          </div>
        ))}
      </div>
      <div className="grid justify-center mt-4">
        <CustomButton name={button2.name} />
      </div>
    </div>
  );
};
