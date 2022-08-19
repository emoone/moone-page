const prod = process.env.NODE_ENV === "production";
module.exports = {
  "process.env.BACKEND_URL": prod ? "https://emoone.github.io/moone-page" : "",
};
