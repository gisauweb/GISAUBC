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
  isMobileView,
}) => {
  let content;

  if (events.length === 0) {
    content = (
      <div>
        <p className={isMobileView && "text-center"}>{`Stay tuned :)`}</p>
      </div>
    );
  } else {
    content = events.map((event) => (
      <div className="grid gap-y-8">
        {!isMobileView && (
          <div>
            <p>{event.desc}</p>
          </div>
        )}
        <div>
          <div className="event-img w-[64%] md:w-[40%] m-auto lg:w-[95%] lg:m-0">
            {event.img}
          </div>
        </div>
        <div className="grid justify-center">
          <Button text={button1} />
        </div>
      </div>
    ));
  }

  return (
    <div className={className}>
      <div
        className={`uppercase flex items-center ${
          isMobileView && "justify-start pl-6"
        }`}
      >
        <h1 className="title text-xl sm:text-2xl xl:text-4xl">{title}</h1>
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
