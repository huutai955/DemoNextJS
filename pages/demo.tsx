import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react";

export default function Demo({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>Demo</div>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch("http://localhost:3000/api/hello");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
