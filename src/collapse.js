import zip from "./utils/zip";

const collapse = (strs, ...args) =>
  zip(strs, ...args)
    .map(str => {
      return str
        .split("\n")
        .map(line => {
          return line.replace(/^\s+/, "").replace(/\s+$/, "");
        })
        .filter(str => str.length > 0)
        .join(" ");
    })
    .join("");

export default collapse;
