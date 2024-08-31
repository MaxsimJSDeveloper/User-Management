import Typography from "@mui/material/Typography";

export const Title = () => {
  return (
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      style={{ marginTop: 20, marginBottom: 20 }}
    >
      User Management App
    </Typography>
  );
};

export default Title;
