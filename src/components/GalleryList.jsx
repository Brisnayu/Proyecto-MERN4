import { Box, ImageList, ImageListItem } from "@mui/material";

const GalleryList = ({ arrayList }) => {
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
      <ImageList variant="masonry" cols={3} gap={8}>
        {arrayList.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.url}?w=248&fit=crop&auto=format`}
              srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={"img-cat-ramdon"}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default GalleryList;
