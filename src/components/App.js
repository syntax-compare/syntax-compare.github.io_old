import { useControlled } from "@material-ui/core";
import { useEffect, useState } from "react";
import tocbot from "tocbot";
import { DEFAULT_LANGUAGES } from "./Const";
import Contents from "./ui/Contents";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";
import { getContents } from "./util/NetworkUtil";

function App() {
  const [languages, setLanguages] = useState(DEFAULT_LANGUAGES);
  const [contents, setContents] = useState({ dummy: "temp" });

  const LANGUAGES_LS = "languages";

  const fruits = ["apple", "banana", "mango"];
  console.log(typeof fruits);

  useEffect(() => {
    console.log("App mounted");
    const localLanguages =
      JSON.parse(localStorage.getItem(LANGUAGES_LS)) || DEFAULT_LANGUAGES;
    console.log(localLanguages);
    setLanguages(localLanguages);

    getContents().then((newContents) => {
      setContents(newContents);

      setTimeout(() => {
        // https://tscanlin.github.io/tocbot/
        tocbot.init({
          // Where to render the table of contents.
          tocSelector: ".js-toc",
          // Where to grab the headings to build the table of contents.
          contentSelector: ".js-toc-content",
          // Which headings to grab inside of the contentSelector element.
          headingSelector: "h1, h2, h3",
          // For headings inside relative or absolute positioned containers within content.
          hasInnerContainers: false,
          // orderedList can be set to false to generate unordered lists (ul) instead of ordered lists (ol)
          // orderedList: false,

          // How many heading levels should not be collapsed.
          // For example, number 6 will show everything since
          // there are only 6 heading levels and number 0 will collapse them all.
          // The sections that are hidden will open
          // and close as you scroll to headings within them.
          collapseDepth: 6,
        });
      }, 1000);
    });
  }, []);

  return (
    <div className="App">
      <Header languages={languages} setLanguages={setLanguages} />
      <SideBar />
      <Contents languages={languages} contents={contents} />
      <Footer />
    </div>
  );
}

export default App;
