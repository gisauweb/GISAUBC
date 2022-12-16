import { Typography } from "@mui/material";
import React from "react";
import About from "../../components/about/About";
import { MainContainer } from "../../shared/layout/MainContainer";

const Home = () => {
  return (
    <MainContainer>
      <About />
      <div className="text-justify">
        <Typography variant="h4" gutterBottom className="text-red-500">
          Main Container
        </Typography>
        <Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>
      </div>
    </MainContainer>
  );
};

export default Home;
