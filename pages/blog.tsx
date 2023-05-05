import MainLayout from "@/components/layouts/mainlayout";
import React, { ReactElement } from "react";

type Props = {};

export default function BlogPage({}: Props) {
  return <div>Blog</div>;
}

BlogPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
