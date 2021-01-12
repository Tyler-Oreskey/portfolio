const dev = {
  apiURL: "http://localhost:8000",
  siteKey: "6LfxWfkZAAAAAL6rnE_4RpatiJI-nRNXHOWGhE8j",
};

const prod = {
  apiURL: "https://backend.toreskey.com",
  siteKey: "6LfxWfkZAAAAAL6rnE_4RpatiJI-nRNXHOWGhE8j",
};

const config = process.env.REACT_APP_ENV === "prod" ? prod : dev;

export default config;
