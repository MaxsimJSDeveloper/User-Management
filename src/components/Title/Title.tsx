import Typography from "@mui/material/Typography";

export const Title = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{
        marginTop: 5,
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem", lg: "3" },
      }}
    >
      User Management App
    </Typography>
  );
};

export default Title;
