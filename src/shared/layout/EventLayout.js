import React from "react";
import { Button } from "shared/components/Button/Button";

import "./EventLayout.css";

export const EventLayout = ({
  className,
  title,
  events,
  icon,
  button1,
  button2,
}) => {
  let content;

  if (events.length === 0) {
    content = (
      <div>
        <p>{`Stay tuned :)`}</p>
      </div>
    );
  } else {
    content = events.map((event) => (
      <div className="grid gap-y-8">
        <div>
          <p>{event.desc}</p>
        </div>
        <div>
          <div className="event-img">{event.img}</div>
        </div>
        <div className="grid justify-center">
          <Button text={button1} />
        </div>
      </div>
    ));
  }

  return (
    <div className={className}>
      <div className="uppercase flex items-center">
        <h1 className="title">{title}</h1>
        <div className="events-icon">{icon}</div>
      </div>
      <div className="mt-10">{content}</div>
      <div
        className={`grid justify-center ${
          events.length === 0 ? "mt-12" : "mt-4"
        }`}
      >
        <Button text={button2.name} transparentBg={true} />
      </div>
    </div>
  );
};
