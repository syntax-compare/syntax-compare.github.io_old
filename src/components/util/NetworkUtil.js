import { AVAILABLE_LANGUAGES } from "../Const";

export async function getContents() {
  let newContents = {};
  const md2json = require("md-2-json");
  for (const lang of AVAILABLE_LANGUAGES) {
    const url = `https://raw.githubusercontent.com/syntax-note/syntax-note.github.io/main/md_common/${lang}.md`;
    console.log(url);
    const response = await fetch(url, { cache: "no-cache" });
    const rawText = await response.text();
    const output = md2json.parse(rawText);
    console.log(output);
    newContents[lang] = output;
  }
  console.log(newContents);
  return newContents;
}
