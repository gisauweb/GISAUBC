import React from "react";

import { EventLayout } from "shared/layout/event-layout/EventLayout";
import { UPCOMINGEVENTS, RANTANGAN } from "./constants";

import { useMediaQuery } from "react-responsive";

const RESPONSIVE_SIZE = "1023px";

export const Events = () => {
  const isMobileView = useMediaQuery({
    query: `(max-width: ${RESPONSIVE_SIZE})`,
  });

  let isRantanganShowed = true;

  if (RANTANGAN.events.length === 0 && isMobileView) {
    isRantanganShowed = false;
  }

  return (
    <div
      className={`${!isMobileView && "flex"} justify-between flex-wrap pt-24`}
    >
      <EventLayout
        className={`${isRantanganShowed && "basis-1/3"} `}
        title={UPCOMINGEVENTS.title}
        events={UPCOMINGEVENTS.events}
        icon={UPCOMINGEVENTS.icon}
        button1={UPCOMINGEVENTS.button1}
        button2={UPCOMINGEVENTS.button2}
        isMobileView={isMobileView}
      />
      {isRantanganShowed && (
        <EventLayout
          className={`basis-1/3 ${isMobileView && "mt-24"}`}
          title={RANTANGAN.title}
          events={RANTANGAN.events}
          icon={RANTANGAN.icon}
          button1={RANTANGAN.button1}
          button2={RANTANGAN.button2}
          isMobileView={isMobileView}
        />
      )}
    </div>
  );
};
