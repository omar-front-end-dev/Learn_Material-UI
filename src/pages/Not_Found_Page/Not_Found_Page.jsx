import { Alert, Typography } from "@mui/material";

export const Not_Found_Page = () => {
  return (
    <Typography sx={{width: "100%"}} component={"div"}>
      <Alert severity="error" sx={{alignItems: "center", height: "86vh", justifyContent: "center"}}>
        <Typography variant="h3">
            <Typography variant="h3" sx={{textAlign: "center", fontWeight: "400"}}>oops</Typography>
            Not Found Page
        </Typography>
      </Alert>
    </Typography>
  );
};

