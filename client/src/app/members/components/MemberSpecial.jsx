import SubHeading from "@/shared/components/SubHeading";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import communityIcon from "assets/members/communityIcon.svg";
import moneyIcon from "assets/members/moneyIcon.svg";
import tagIcon from "assets/members/tagIcon.svg";
import stars from "assets/partners/text decor.svg";

export default function MemberSpecial() {
  return (
    <Box className="relative flex flex-col w-full h-auto align-bottom z-10">
      <SubHeading text="SPECIAL FOR GISAU MEMBERS" isLeft icon={stars} />
      <div className="flex lg:flex-row flex-col w-full gap-5 pb-10 md:pb-36">
        <div className="w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl">
          <img src={moneyIcon} alt="search.png" className="pb-4" />
          <div className="flex flex-col gap-4">
            <Typography variant="h4" color="black" className="font-oswald">
              Member Pricing
            </Typography>
            <Typography variant="body1">
              Enjoy special member pricing for all of our events, including
              delicious Indonesian food and exclusive GISAU merchandise!
            </Typography>
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl">
          <img src={tagIcon} alt="search.png" className="pb-4" />
          <div className="flex flex-col gap-4">
            <Typography variant="h4" color="black">
              Exclusive Discounts
            </Typography>
            <Typography variant="body1">
              Access exclusive discount codes from our valued year-long
              sponsors, giving you great deals on local businesses that support
              our community.
            </Typography>
          </div>
        </div>
        <div className="w-full lg:w-1/3 h-auto bg-bgCream p-7 rounded-xl">
          <img src={communityIcon} alt="search.png" className="pb-4" />
          <div className="flex flex-col gap-4">
            <Typography variant="h4" color="black">
              Indonesian Community
            </Typography>
            <Typography variant="body1">
              Immerse yourself in the warmth of the Indonesian community at UBC,
              where you will find friends, food, and fun while staying connected
              to home.
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}
