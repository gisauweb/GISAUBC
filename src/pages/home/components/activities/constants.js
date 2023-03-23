import activity_1 from "assets/activities/img_1.svg"
import activity_2 from "assets/activities/img_2.svg"
import activity_3 from "assets/activities/img_3.svg"
import smiley_image from "assets/activities/smiley.svg"

const activities = [
    {id: 0, image: activity_1, title: "Organize lively events", description: "From back-to-campus welcoming parties, Indomie eating competitions, to charity-based challenges and picnic socials, we strive to provide enjoyable experiences for attendees!", alignment: "start"},
    {id: 1, image: activity_2, title: "Host informational workshops", description: "Gain co-op/industry insights and join inspiring career-based talks with current Indonesian students, alumni and professionals!", alignment: "center"},
    {id: 2, image: activity_3, title: "Share Indonesian delicacy", description: "Experience a taste of Indonesian cuisine through our monthly Rantangan and annual Taste of Sea event (in collaboration with UBC ASEAC).", alignment: "end"},
]

const smiley = smiley_image

export {activities, smiley}