import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { Box } from "@mui/material";
import { ReactElement } from "react";
import MainLayout from "@/components/layouts/mainlayout";
export default function Home() {
  return <Box>Home Page</Box>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
