import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface DetailProduct {
  id: string;
  title: string;
  author: string;
  description: string;
  createdAt: number;
  updatedAt: number;
  imageUrl: string;
}

type Props = {
  posts: DetailProduct;
};

export default function PostDetailPage({ posts }: Props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>PostDetailPage</h1>
      <h2> {posts.id}</h2>
      <p> {posts.description}</p>
      <Link href={"/posts"}>Back to Posts</Link>
    </div>
  );
}

// Writing getStaticPaths with typescript
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    paths: data.data.map((item: any) => {
      return {
        params: { id: String(item.id) },
      };
    }),
    fallback: true,
  };
};

// Writing getstaticprops with typpescripts
export const getStaticProps: GetStaticProps<Props> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${context.params?.id}`
  );
  const data = await response.json();
  return {
    props: {
      posts: data,
    },
    revalidate: 5,
  };
};
