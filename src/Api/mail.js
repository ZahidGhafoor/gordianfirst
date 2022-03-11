import axios from "../axiosInstance";

const mail = async (val) => {
  let resolved = {
    error: null,
    data: null,
  };

  try {
    let res = await axios({
      url: "/mail/send",
      method: "POST",
      data: {
        name: val.fullName,
        email: val.email,
        message: val.message,
      },
    });
    resolved.data = res.data;
  } catch (error) {
    resolved.error = "Something went wrong";
  }
  return resolved;
};

export { mail };
