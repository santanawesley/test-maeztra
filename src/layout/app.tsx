import { useEffect, useState } from "react";

import { BannerInfoCard } from "./components/banner-info-card";
import { Banner } from "./components/banner-main";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ModalNewsletter } from "./components/modal-newsletter";
import { Newsletter } from "./components/newsletter";
import { Showcase } from "./components/showcase";
import { TipBar } from "./components/tip-bar";
import { TipBarBrands } from "./components/tip-bar-brands";

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

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
      {showModal && <ModalNewsletter closeModal={closeModal} />}
    </>
  );
}

export default App;
