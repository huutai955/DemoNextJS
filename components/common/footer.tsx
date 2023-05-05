import React from "react";
import { Box } from "@mui/material";
type Props = {};

export default function Footer({}: Props) {
  return (
    <Box component={"footer"} py={2} textAlign={"center"}>
      Footer
    </Box>
  );
}
