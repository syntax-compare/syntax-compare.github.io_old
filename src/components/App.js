import Contents from "./ui/Contents";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

function App() {
  const url = "/python.md";
  fetch(url)
    .then((r) => r.text())
    .then((t) => {
      console.log(t);
      const md2json = require("md-2-json");
      const output = md2json.parse(t);
      console.log(output);
    });

  return (
    <div className="App">
      <Header />
      <div>
        <SideBar />
        <Contents />
      </div>
      <Footer />
    </div>
  );
}

export default App;
