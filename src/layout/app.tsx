import "./app.scss";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Newsletter } from "./components/newsletter";
import { TipBar } from "./components/tip-bar";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <TipBar />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
