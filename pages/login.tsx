import AuthApi from "@/api/auth-api";
import axiosClient from "@/api/axios-client";
import Link from "next/link";
import React, { ReactElement } from "react";
import useSWR from "swr";

type Props = {};

export default function LoginPage({}: Props) {
  const { data, mutate, error } = useSWR("profile", AuthApi.getProfile, {
    revalidateOnMount: false,
  });

  console.log(data);
  const handleLogin = async () => {
    try {
      const result = await AuthApi.login({
        username: "huutai",
        password: "123123",
      });
      console.log(result);
      mutate();
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    try {
      await AuthApi.logout();
      mutate(
        {
          username: "",
          email: "",
          city: "",
        },
        false
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetProfile = async () => {
    try {
      await AuthApi.getProfile();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1>LoginPage</h1>
      <h2>Profile {JSON.stringify(data)}</h2>
      <Link href={"/posts"}>Go to Post</Link>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleGetProfile}>GetProfile</button>
    </div>
  );
}
