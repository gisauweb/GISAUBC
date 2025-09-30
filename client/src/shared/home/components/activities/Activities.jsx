import { Box } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import SubHeading from "@/shared/components/SubHeading";
import { activities, smiley } from "./constants";
import ActivitiesSlider from "./Slider";

function Activities() {
  const isMobile = useMediaQuery({ query: "(max-width: 1023px) " });

  return (
    <div className="pt-24">
      <SubHeading text="WHAT WE DO" isRight icon={smiley} />
      <div className="w-full relative flex flex-col lg:py-8">
        {isMobile ? (
          <ActivitiesSlider className="mt-8 sm:mt-12" />
        ) : (
          <>
            {activities.map((activity) => (
              <Box
                key={activity.id}
                className="relative w-full flex flex-row items-center"
              >
                <div className="relative w-1/4 py-3">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                    <img
                      alt="Activity"
                      id={activity.id}
                      src={activity.image}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <img
                    alt="Icon"
                    src={activity.icon}
                    className={`absolute ${activity.iconStyle}`}
                    loading="lazy"
                  />
                </div>

                <div className="relative w-5/6 h-full px-3">
                  <div className="font-oswald text-6xl font-extrabold text-primary">
                    {activity.header}
                  </div>
                  <div className="font-oswald text-xl/10 font-bold">
                    {activity.title}
                  </div>
                  <div className="font-proxima text-sm">
                    {activity.description}
                  </div>
                </div>
              </Box>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
export default Activities;
