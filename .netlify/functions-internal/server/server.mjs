export { default } from "./main.mjs";
export const config = {
  name: "server handler",
  generator: "nuxt@4.2.2",
  path: "/*",
  nodeBundler: "none",
  includedFiles: ["**"],
  excludedPath: ["/.netlify/*","/assets/builds/meta/*","/assets/builds/*","/assets/*"],
  preferStatic: true,
};