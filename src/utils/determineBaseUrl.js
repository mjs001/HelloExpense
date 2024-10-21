import env from "react-dotenv";
export const determineBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
      return env.REACT_APP_BASE_URL_LOCAL;
    } else if (process.env.NODE_ENV === "production") {
      return env.REACT_APP_BASE_URL_PRODUCTION;
    }
};
