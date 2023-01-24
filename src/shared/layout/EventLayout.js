import React from "react";
import { CustomButton } from "shared/components/CustomButton";

import UpcomingEvents from "assets/events/upcoming_event.svg";
import RumahHantu from "assets/events/rumah_hantu.jpg";

export const EventLayout = ({ className }) => {
  return (
    <div className={className}>
      <div className="uppercase flex gap-1/20">
        <h1 className="title">Upcoming events</h1>
        <img src={UpcomingEvents} alt="" className="max-w-[10%]"></img>
      </div>
      <div className="mt-10 grid gap-y-8">
        <div>
          <p>
            Come get your post-midterm scare at our Rumah Hantu! An event
            collaboration with PERMIKA
          </p>
        </div>
        <div>
          <img
            src={RumahHantu}
            alt="Rumah Hantu"
            className="rounded-3xl max-w-[95%]"
          ></img>
        </div>
        <div className="grid justify-center gap-y-4">
          <CustomButton />
          <CustomButton />
        </div>
      </div>
    </div>
  );
};
