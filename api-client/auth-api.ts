import { LoginPayload, ProfileData } from "@/models/auth";
import axiosClient from "./axios-client";

class AuthAPI {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  }

  logout() {
    return axiosClient.post("logout");
  }

  async getProfile() {
    try {
      const result: ProfileData = await axiosClient.get("/profile ");
      return result;
    } catch (err) {
      console.log(err);
    }
  }
}

const AuthApi = new AuthAPI();

export default AuthApi;
