import axios, { AxiosResponse } from "axios";

export const fetchData = async <T>(
  url: string,
  token: string | null
): Promise<T> => {
  if (!token) {
    throw new Error("access token is null");
  }
  try {
    const response = await axios.get(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data as T;
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
};

export const submitData = async <T>(
  url: string,
  method: "POST" | "PATCH" | "PUT" | "DELETE",
  data: Record<string, any>,
  token?: string | null
): Promise<T> => {
  // if (!token) {
  //   throw new Error("access token is null");
  // }
  // try {
  const response: AxiosResponse<T> = await axios({
    url,
    method,
    data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data as T;
  // } catch (err) {
  // throw new Error("Failed to fetch data");
  // return err;
  // }
};
