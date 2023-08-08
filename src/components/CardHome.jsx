import { Grid } from "@mui/material";

const CardHome = ({ title, text }) => {
  return (
    <Grid
      item
      xs={4}
      backgroundColor={"var(--color-background)"}
      height={"8rem"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      textAlign={"center"}
      style={{
        padding: "1rem",
        gap: "0.5rem",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </Grid>
  );
};

export default CardHome;
