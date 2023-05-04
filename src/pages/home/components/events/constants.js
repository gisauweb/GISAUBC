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
      title: "SEA Pit Night",
      desc: ["Saturday, April 8", "The Pit @ UBC"],
      img: (
        <img
          src={require("../../../../assets/events/pit_night.jpg")}
          alt="SEA Pit Night"
        />
      ),
      link: "www.showpass.com/south-east-asian-hip-hop/",
    },
    {
      title: "Exam Care Package",
      desc: ["Wednesday, April 12", "AMS Nest @ UBC"],
      img: (
        <img
          src={require("../../../../assets/events/care_package.jpg")}
          alt="Exam Care Package"
        />
      ),
      link: "docs.google.com/forms/d/e/1FAIpQLSde4ZkJR6ZwRlGY7UEn_AK-q0m21lB50rY5SKFNT1gNoZwuGA/viewform?usp=sf_link",
    },
    {
      title: "SEA Pit Night",
      desc: ["Saturday, April 8", "The Pit @ UBC"],
      img: (
        <img
          src={require("../../../../assets/events/pit_night.jpg")}
          alt="SEA Pit Night"
        />
      ),
      link: "www.showpass.com/south-east-asian-hip-hop/",
    },
    {
      title: "SEA Pit Night",
      desc: ["Saturday, April 8", "The Pit @ UBC"],
      img: (
        <img
          src={require("../../../../assets/events/pit_night.jpg")}
          alt="SEA Pit Night"
        />
      ),
      link: "www.showpass.com/south-east-asian-hip-hop/",
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
