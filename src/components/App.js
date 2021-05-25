import Contents from "./ui/Contents";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import SideBar from "./ui/SideBar";

function App() {
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
