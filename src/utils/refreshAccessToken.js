const jwtDecode = require("jwt-decode");
const axios = require("axios");

const refreshAccessToken = async token => {
  let decodedToken = await jwtDecode(token);
  if (decodedToken.exp * 1000 > Date.now()) {
    return token;
  } else {
    console.log("refresh");
    let refreshToken = localStorage.getItem(
      "refreshToken",
      decodedToken.exp * 1000 < Date.now()
    );

    const params = new URLSearchParams();
    params.append("grant_type", "refresh_token");
    params.append("refresh_token", `${refreshToken}`);
    let res = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.REACT_APP_API_KEY}`,
      params
    );
    localStorage.setItem("token", res.data.access_token);
    return res.data.access_token;
  }
};

export default refreshAccessToken;
