// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import httpProxy from "http-proxy";
import Cookies from "cookies";

const proxy = httpProxy.createProxyServer();

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return new Promise(() => {
    // console.log(req.headers.cookie);
    const cookies = new Cookies(req, res);
    const accessToken = cookies.get("access_token");
    if (cookies.get("access_token")) {
      req.headers.authorization = "Bearer " + accessToken;
    }

    req.headers.cookie = "";
    proxy.web(req, res, {
      target: "https://js-post-api.herokuapp.com",
      changeOrigin: true,
      selfHandleResponse: false,
    });
  });
}
