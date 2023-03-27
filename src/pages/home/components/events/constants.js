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
      desc: [
        "End the school year with some glam and GISAU ✨️",
        "Daripada galau, mending ikut GISAU gala 🫣😉",
      ],
      img: (
        <img
          src={require("../../../../assets/events/galau.png")}
          alt="Gala with GISAU"
        />
      ),
      link: "galaugisau.getqpay.com",
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
  button2: { name: "View past events", path: "events" },
};

export const RANTANGAN = {
  title: "Rantangan",
  events: [{
    desc: [
      "Missing some Indonesian food? GISAU got you 😉",
      "Let's take a look back on our March Rantangan",
      "🎉 Nasi Liwet 🎉",
    ],
    img: (
      <img
        src={require("../../../../assets/events/rantangan_march.jpeg")}
        alt="Nasi Liwet Rantangan"
      />
    ),
    link: "gisaubc.com/rantangan",
  },
],
  icon: (
    <img
      src={require("../../../../assets/events/rantangan.svg").default}
      alt=""
      className="ml-1/10"
    />
  ),
  button1: "Pre-order",
  button2: { name: "View past menus", path: "rantangan" },
};
