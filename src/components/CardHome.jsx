import { Grid } from "@mui/material";

const CardHome = ({ title, text }) => {
  return (
    <Grid
      item
      xs={4}
      backgroundColor={"var(--color-background)"}
      height={"10rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      style={{ padding: "0" }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </Grid>
  );
};

export default CardHome;
