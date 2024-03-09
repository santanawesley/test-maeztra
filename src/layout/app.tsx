import "./app.scss";
import { Banner } from "./components/banner";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Newsletter } from "./components/newsletter";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
