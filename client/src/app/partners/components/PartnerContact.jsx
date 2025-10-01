import { Container } from "@mui/material";
import { Button } from "@/shared/components";

function PartnerContact() {
  const containerStyle = {
    width: "100%",
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  return (
    <Container
      style={containerStyle}
      className="relative sm:py-3 pb-28 md:pb-36"
    >
      <a
        href="mailto:sponsorship.gisau@gmail.com"
        className="flex flex-col gap-5 mt-5 border-3 border-primary rounded-full"
        aria-label="Save"
      >
        <h4 className="pt-4 lg:pt-6 font-oswald font-bold text-4xl">
          Contact us at
        </h4>
        <Button text="sponsorship.gisau@gmail.com" />
      </a>
    </Container>
  );
}

export default PartnerContact;
