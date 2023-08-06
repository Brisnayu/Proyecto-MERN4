import { Box, ImageList, ImageListItem } from "@mui/material";

const GalleryList = ({ arrayList }) => {
  const styleImage = {
    width: "15rem",
    alignItems: "center",
    borderRadius: "15px",
    border: "1px solid var(--color-primary)",
  };
  const styleContainerImage = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
    scrollX: "hidden",
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "1rem 2rem 2rem 2rem",
      }}
    >
      <ImageList variant="masonry" cols={3} gap={8} sx={styleContainerImage}>
        {arrayList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={"img-cat-ramdon"}
              loading="lazy"
              style={styleImage}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryList;
