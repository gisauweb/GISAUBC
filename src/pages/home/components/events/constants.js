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
        "Contribute to the future of GISAU by joining us at our Annual General Meeting (AGM)🎉",
        "Also, don't miss out on hearing about the team's accomplishments from the year🤫",
      ],
      img: (
        <img
          src={require("../../../../assets/events/agm.png")}
          alt="Annual General Meeting"
        />
      ),
      link: "docs.google.com/forms/d/e/1FAIpQLSfUQSU9O3rd-7AVFtRpjJMGuBbn66IWNYJ9QXuwUVRPOb_KbA/viewform",
    },
    {
      desc: [
        "End the school year with some glam and GISAU✨️",
        "Daripada galau, mending ikut GISAU gala🫣😉",
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
  events: [],
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
