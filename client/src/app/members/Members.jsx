import { Box } from "@mui/material";
import membersLandingImg from "assets/landing-image/members.webp";
import wavy from "assets/partners/text decor 3.svg";
import { Footer, LandingImage, ScrollButton } from "@/shared/components/index";
import PageHeading from "@/shared/components/PageHeading";
import SubHeading from "@/shared/components/SubHeading";
import MainContainer from "@/shared/layout/MainContainer";
import {
  MemberBenefits,
  MemberContact,
  MemberSpecial,
} from "./components/index";
import MemberButton from "./components/MemberButton";

export default function Members() {
  return (
    <Box>
      <LandingImage
        bgImage={membersLandingImg}
        text="Become A Member"
        button={<MemberButton text="GISAU Membership Form" />}
      />
      <MainContainer>
        <PageHeading>
          Join our community and unlock exclusive member benefits.
        </PageHeading>
        <MemberSpecial />
        <MemberBenefits />
        <SubHeading text="INTERESTED TO BECOME A MEMBER?" isLeft icon={wavy} />
        <MemberContact />
        <ScrollButton threshold={1 / 2} />
      </MainContainer>
      <Footer />
    </Box>
  );
}
