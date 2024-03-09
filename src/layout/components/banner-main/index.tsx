import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Img1Banner } from "../../../assets";
import "./banner.scss";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <svg
        width="20"
        height="32"
        viewBox="0 0 20 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.514971 14.7561L14.7568 0.514971C15.4434 -0.171657 16.5573 -0.171657 17.2439 0.514971L18.9052 2.17621C19.5911 2.86211 19.5918 3.97302 18.9081 4.66038L7.62087 15.9996L18.9074 27.3396C19.5918 28.027 19.5903 29.1379 18.9044 29.8238L17.2432 31.485C16.5566 32.1717 15.4427 32.1717 14.7561 31.485L0.514971 17.2432C-0.171657 16.5566 -0.171657 15.4427 0.514971 14.7561Z"
          fill="#353535"
        />
      </svg>
    ),
    nextArrow: (
      <svg
        width="20"
        height="32"
        viewBox="0 0 20 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9047 17.2436L4.6633 31.4849C3.97646 32.1717 2.86291 32.1717 2.17613 31.4849L0.515117 29.8238C-0.170556 29.1382 -0.171875 28.0269 0.512186 27.3396L11.7987 16L0.512186 4.66039C-0.171875 3.9731 -0.170556 2.86182 0.515117 2.17615L2.17613 0.515134C2.86298 -0.171711 3.97653 -0.171711 4.6633 0.515134L18.9046 14.7564C19.5914 15.4432 19.5914 16.5567 18.9047 17.2436Z"
          fill="#353535"
        />
      </svg>
    ),
  };

  const data = [
    {
      title: "Promoções de Outono",
      subTitle:
        "Confiras os melhores looks para combinar com você nesse Outono",
      CTAText: "Conferir",
      imgUrl: "Img1Banner",
      id: 1,
    },
    {
      title: "Promoções de Verão",
      subTitle: "Confiras os melhores looks para combinar com você nesse Verão",
      CTAText: "Conferir",
      imgUrl: "Img1Banner",
      id: 2,
    },
    {
      title: "Promoções de Inverno",
      subTitle:
        "Confiras os melhores looks para combinar com você nesse Inverno",
      CTAText: "Conferir",
      imgUrl: "Img1Banner",
      id: 3,
    },
    {
      title: "Promoções de Primavera",
      subTitle:
        "Confiras os melhores looks para combinar com você nessa Primavera",
      CTAText: "Conferir",
      imgUrl: "Img1Banner",
      id: 4,
    },
    {
      title: "Promoções de Ano Novo",
      subTitle:
        "Confiras os melhores looks para combinar com você nesse Ano Novo",
      CTAText: "Conferir",
      imgUrl: "Img1Banner",
      id: 5,
    },
  ];

  return (
    <div className="full-banner">
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <div>
                <img src={Img1Banner} alt="Imagem 1" />
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
                <button>{item.CTAText}</button>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { Banner };
