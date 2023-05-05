import React, { ReactElement, ReactNode } from "react";
import dynamic from "next/dynamic";
import { Stack, Box, Container } from "@mui/material";
import Header from "../common/header";
import Footer from "../common/footer";
import { Typography } from "@mui/material";
import theme from "@/utils/theme";
import { ThemeProvider } from "@emotion/react";

type Props = {
  children: ReactElement;
};

export default function MainLayout({ children }: Props) {
  return (
    <Stack minHeight={"100vh"}>
      <Header />
      <ThemeProvider theme={theme}>
        <Container sx={{ flexGrow: 1 }} >
          <Typography component={"h1"} variant="h3" color={"primary.main"}>
            Hello
          </Typography>
          <Box component={"main"}>{children}</Box>
        </Container>
        <Footer />
      </ThemeProvider>
    </Stack>
  );
}
