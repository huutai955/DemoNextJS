import MainLayout from "@/components/layouts/mainlayout";
import React, { ReactElement } from "react";

type Props = {};

export default function WorksPage({}: Props) {
  return <div>work</div>;
}

WorksPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
