import { Box, CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import router from "next/router";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  useEffect(() => {
    router?.push("/home");
  }, []);
  return (
    <>
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
    </>
  );
};

export default Home;
