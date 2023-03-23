import React from "react";
import { Button } from "../../components/button/Button";
import { useNavigate } from "react-router-dom";

import "./EventLayout.css";

export const EventLayout = ({
  id,
  className,
  title,
  events,
  icon,
  button1,
  button2,
  isMobileView,
}) => {
  const navigate = useNavigate();

  const handleClickButton = (link) => {
    window.open("https://" + link, "_blank", "noreferrer");
  };

  const handleClickButton2 = () => {
    navigate(button2.path);
  };

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
            {event.desc.map((text) => (
              <p>{text}</p>
            ))}
          </div>
        )}
        <div>
          <div className="event-img w-[80%] md:w-[50%] m-auto lg:w-[95%] lg:m-0">
            {event.img}
          </div>
        </div>
        <div className="grid justify-center">
          <Button
            text={button1}
            handleClickButton={() => handleClickButton(event.link)}
          />
        </div>
      </div>
    ));
  }

  return (
    <div className={className} id={id}>
      <div className={`uppercase flex items-center justify-start`}>
        <h1 className="title text-2xl sm:text-3xl xl:text-4xl">{title}</h1>
        <div className="events-icon">{icon}</div>
      </div>
      <div className="mt-10">{content}</div>
      <div
        className={`grid justify-center ${
          events.length === 0 ? "mt-12" : "mt-4"
        }`}
      >
        <Button
          text={button2.name}
          transparentBg={true}
          handleClickButton={handleClickButton2}
        />
      </div>
    </div>
  );
};
