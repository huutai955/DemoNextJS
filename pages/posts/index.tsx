import { GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import MainLayout from "@/components/layouts/mainlayout";
import { Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Auth from "@/components/auth/auth";
type Props = {
  posts: any[];
};

export default function PostPage({ posts }: Props) {
  const router = useRouter();
  return (
    <div>
      {/* <Header /> */}
      <Typography component={"h1"} variant="h3" color={"primary.main"}>
        Post
      </Typography>
      <ul>
        {posts?.map((item: any) => {
          return (
            <li key={item.id}>
              {item.title}{" "}
              <button
                onClick={() => {
                  router.push(`/posts/${item.id}`);
                }}
              >
                {item.id}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Auth>
      <MainLayout>{page}</MainLayout>
    </Auth>
  );
};

// Writing getstaticprops with typpescripts
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch("https://js-post-api.herokuapp.com/api/posts");
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
  };
};
