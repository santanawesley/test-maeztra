import { useMediaQuery } from "react-responsive";

import { ImgInfoCard, ImgInfoCardMob } from "../../../assets";
import "./banner-info-card.scss";

const BannerInfoCard = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="wrapper-banner-info-card">
      <div className="banner-info-card">
        <div className="text-info-card">
          <h3 className="title-info-card">Lorem ipsum</h3>
          <p className="description-info-card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
            mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim
            dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris
            integer. Nibh sagittis in lobortis sed cursus condimentum velit
            pharetra. Amet luctus ut vulputate scelerisque placerat consequat.
            Neque arcu mi iaculis id. Vel vitae, pharetra, a nec tristique.
            Feugiat id tortor eu mauris pulvinar velit massa. Ut ornare augue
            eget convallis volutpat aliquet. Sed sed pellentesque porttitor
            phasellus donec condimentum sit sapien.
          </p>
        </div>
        <div className="img-info-card">
          <img
            src={isMobile ? ImgInfoCardMob : ImgInfoCard}
            alt="Foto coleção Outono-Inverno"
          />
        </div>
      </div>
    </div>
  );
};

export { BannerInfoCard };
