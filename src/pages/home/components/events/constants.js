/**
 * events field:
 * - desc
 * - img
 * - link
 */

export const UPCOMINGEVENTS = {
  title: "Upcoming Events",
  events: [
    {
      desc: "Come get your post-midterm scare at our Rumah Hantu! An event collaboration with PERMIKA",
      img: (
        <img
          src={require("../../../../assets/events/rumah_hantu.jpg")}
          alt="Rumah Hantu"
        />
      ),
      link: "",
    },
  ],
  icon: (
    <img
      src={require("../../../../assets/events/upcoming_event.svg").default}
      alt=""
      className="ml-[25%] w-[80%] sm:ml-[35%] sm:w-full"
    />
  ),
  button1: "Register",
  button2: { name: "View past events", navigate: "/" },
};

export const RANTANGAN = {
  title: "Rantangan",
  events: [],
  icon: (
    <img
      src={require("../../../../assets/events/rantangan.svg").default}
      alt=""
      className="ml-1/10"
    />
  ),
  button1: "Pre-order",
  button2: { name: "View past menus", navigate: "/" },
};
