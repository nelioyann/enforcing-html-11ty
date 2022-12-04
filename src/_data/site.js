let inDevelopment = process.env.ELEVENTY_ENV === "development";

module.exports = {
  title: "HTML Practices",
  description: "Enforcing HTML best practices in Eleventy",
  baseUrl: inDevelopment
    ? "http://localhost:8080"
    : "https://enforcing-html.yannicknana.fr",
  language: "en",
  author: {
    name: "Yannick",
    email: "hello@yannicknana.fr",
    url: "https://yannicknana.fr/",
    twitter: "nelioyann",
  },
};
