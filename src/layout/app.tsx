import "./app.scss";
import { BannerInfoCard } from "./components/banner-info-card";
import { Banner } from "./components/banner-main";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Newsletter } from "./components/newsletter";
import { Showcase } from "./components/showcase";
import { TipBar } from "./components/tip-bar";
import { TipBarBrands } from "./components/tip-bar-brands";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TipBar />
      <TipBarBrands />
      <Showcase />
      <BannerInfoCard />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
