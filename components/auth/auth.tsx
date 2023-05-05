import AuthApi from "@/api/auth-api";
import axiosClient from "@/api/axios-client";
import { useRouter } from "next/router";
import React, { ReactElement, ReactNode, useEffect } from "react";
import useSWR from "swr";
type Props = {
  children: ReactElement;
};

export default function Auth({ children }: Props) {
  const router = useRouter();
  const { data, error } = useSWR("profile", AuthApi.getProfile, {
    revalidateOnMount: false,
  });
  useEffect(() => {
    if (!data?.username) {
      router.push("/login");
    }
  }, [data, router]);
  console.log(data);
  return <>{children}</>;
}
