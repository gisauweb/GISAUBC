import activity_1 from "assets/activities/img_1.svg"
import activity_2 from "assets/activities/img_2.svg"
import activity_3 from "assets/activities/img_3.svg"
import smiley_img from "assets/activities/smiley.svg"
import bombay from "assets/sponsors/bombay.png"
import evo from "assets/sponsors/evo.png"
import hellofresh from "assets/sponsors/hellofresh.png"
import panela_lemon from "assets/sponsors/panela_lemon.jpg"
import righteous from "assets/sponsors/righteous.png"
import susgrainable from "assets/sponsors/susgrainable.png"
import vnysa from "assets/sponsors/vnysa.png"


const activities = [
    {id: 0, image: activity_1, title: "Organize lively events", description: "From back-to-campus welcoming parties, Indomie eating competitions, to charity-based challenges and picnic socials, we strive to provide enjoyable experiences for attendees!"},
    {id: 1, image: activity_2, title: "Host informational workshops", description: "Gain co-op/industry insights and join inspiring career-based talks with current Indonesian students, alumni and professionals!"},
    {id: 2, image: activity_3, title: "Share Indonesian delicacy", description: "Experience a taste of Indonesian cuisine through our monthly Rantangan and annual Taste of Sea event (in collaboration with UBC ASEAC)."},
]

const smiley = smiley_img

const partners = [
    { 'name': 'Bombay Masala', 'logo': bombay },
    { 'name': 'Evo', 'logo': evo },
    { 'name': 'Hello Fresh', 'logo': hellofresh },
    { 'name': 'Panela Lemon', 'logo': panela_lemon },
    { 'name': 'Righteous', 'logo': righteous },
    { 'name': 'Susgrainable', 'logo': susgrainable },
    { 'name': 'Vnysa', 'logo': vnysa }
]

export {activities, smiley, partners}