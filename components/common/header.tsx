import React from "react";
import { Box } from "@mui/material";
type Props = {};

export default function Header({}: Props) {
  return (
    <Box component={"header"} py={2} textAlign={"center"}>
      Header
    </Box>
  );
}
