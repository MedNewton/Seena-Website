import { Stack, Typography } from "@mui/material";
import Image from "next/image";
import bg from "@/assets/images/bg1.webp";

const HeroCard = () => {
  return (
    <Stack id="hero" sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        height: "100%",
    }}>
      <Image src={bg} alt="Hero Card" fill style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }} />
    </Stack>
  );
}       

export default HeroCard;