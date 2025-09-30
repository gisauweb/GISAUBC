import { useMediaQuery } from "react-responsive";
import EventLayout from "@/shared/layout/event-layout/EventLayout";

export default function Events() {
  const isMobileView = useMediaQuery({ query: "(max-width: 1039px)" });

  return (
    <div
      id="events"
      className={`${
        !isMobileView && "flex"
      } justify-between flex-wrap pt-24 pb-5`}
    >
      <EventLayout />
    </div>
  );
}
