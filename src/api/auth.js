import { authAxios } from "./api";

export const LoginAPI = async (data) => {
  try {
    const result = await authAxios.post("/login", data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

export const SignUpAPI = async (data) => {
  try {
    const result = await authAxios.post("/", data);
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
