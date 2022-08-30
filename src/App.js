import Header from "./components/header/Header";
import Main_Banner from "./components/main_banner/Main_Banner";
import Count from "./components/count/Count";
import FeedList from "./components/feed/FeedList";
import Cta_Banner from "./components/cta_banner/Cta_Banner";
import Latest_Blogs from "./components/latest_blogs/Latest_Blogs";
import Cta_Content from "./components/cta_content/Cta_Content";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main_Banner />
      <Count />
      <FeedList />
      <Cta_Banner />
      <Latest_Blogs />
      <Cta_Content />
      <Footer />
    </div>
  );
}

export default App;
