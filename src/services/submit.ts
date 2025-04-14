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

// const url = `${BASEURL}/stories/`; 
// const accessToken = localStorage.getItem("access");

// console.log("title", title);

// const formData = new FormData();

// formData.append("title", title);
// formData.append("sub_title", subTitle);
// formData.append("content", content);
// formData.append("banner", selectedFile);

// try {
//   const res = axios.post(url, formData, {
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "Content-Type": "multipart/form-data",
//     },
//   });

//   console.log("data", res);
// } catch (err) {
//   console.log("err", err);
// }
