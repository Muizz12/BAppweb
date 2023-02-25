import { Box, CircularProgress } from "@mui/material";
import router from "next/router";
import React, { useEffect } from "react";

function Home() {
  const [loading, setLoading] = React.useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    router?.push("/dashboard");
  }, []);
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
}

export default Home;
