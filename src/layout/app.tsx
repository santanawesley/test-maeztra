import "./app.scss";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Newsletter } from "./components/newsletter";
import { TipBar } from "./components/tip-bar";
import { TipBarBrands } from "./components/tip-bar-brands";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TipBar />
      <TipBarBrands />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
