import Header from "./components/header/Header";
import Main_Banner from "./components/main_banner/Main_Banner";
import Feed from "./components/feed/Feed";
import Cta_Banner from "./components/cta_banner/Cta_Banner";
import Latest_Blogs from "./components/latest_blogs/Latest_Blogs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main_Banner />
      <Feed />
      <Cta_Banner />
      <Latest_Blogs />
      <Footer />
    </div>
  );
}

export default App;
