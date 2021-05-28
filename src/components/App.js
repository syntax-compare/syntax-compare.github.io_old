import { useEffect, useState } from "react";
import { DEFAULT_LANGUAGES } from "./Const";
import Contents from "./ui/Contents";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

function App() {
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGES);
  const [contents, setContents] = useState({ dummy: "temp" });

  const LANGUAGES_LS = "languages";

  const loadContents = async () => {
    let newContents = {};
    const md2json = require("md-2-json");
    for (const lang of ["python", "kotlin"]) {
      const url = `/${lang}.md`;
      console.log(url);
      const response = await fetch(url);
      const rawText = await response.text();
      const output = md2json.parse(rawText);
      console.log(output);
      newContents[lang] = output;
    }
    console.log(newContents);
    return newContents;
  };

  useEffect(() => {
    console.log("App mounted");
    const localLanguages =
      JSON.parse(localStorage.getItem(LANGUAGES_LS)) || DEFAULT_LANGUAGES;
    console.log(localLanguages);
    setLanguages(localLanguages);

    loadContents().then((newContents) => setContents(newContents));
  }, []);

  return (
    <div className="App">
      <Header languages={languages} setLanguages={setLanguages} />
      <div>
        <SideBar />
        <Contents languages={languages} contents={contents} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
