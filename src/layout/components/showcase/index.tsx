import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

import { Img1Showcase, Img2Showcase } from "../../../assets";
import "./showcase.scss";

const Showcase = () => {
  const breakOne = useMediaQuery({ maxWidth: 767 });
  const breakTwo = useMediaQuery({ maxWidth: 1000 });
  const breakThree = useMediaQuery({ maxWidth: 1300 });
  const breakFour = useMediaQuery({ maxWidth: 1599 });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: breakOne
      ? 1
      : breakTwo
      ? 2
      : breakThree
      ? 3
      : breakFour
      ? 4
      : 5,
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
      id: 1,
      value: "R$ 500,00",
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      imgUrl: Img1Showcase,
      CTAText: "Adicionar",
      colors: ["#3C3B79", "#6497D3", "#D37164", "#DEAC71"],
    },
    {
      id: 2,
      value: "R$ 320,00",
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      imgUrl: Img2Showcase,
      CTAText: "Adicionar",
      colors: ["#EAE9E5", "#CFC9B0", "#D84E4B", "#1C1A19"],
    },
    {
      id: 3,
      value: "R$ 500,00",
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      imgUrl: Img1Showcase,
      CTAText: "Adicionar",
      colors: ["#3C3B79", "#6497D3", "#D37164", "#DEAC71"],
    },
    {
      id: 4,
      value: "R$ 320,00",
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      imgUrl: Img2Showcase,
      CTAText: "Adicionar",
      colors: ["#EAE9E5", "#CFC9B0", "#D84E4B", "#1C1A19"],
    },
    {
      id: 5,
      value: "R$ 500,00",
      name: "Faux Suede Mini Skirt",
      description:
        "A faux suede mini skirt featuring exposed button-front closures and panel seam construction.",
      imgUrl: Img1Showcase,
      CTAText: "Adicionar",
      colors: ["#3C3B79", "#6497D3", "#D37164", "#DEAC71"],
    },
    {
      id: 6,
      value: "R$ 320,00",
      name: "Ruched Rose Print Mini Skirt",
      description:
        "A satin mini skirt featuring an allover floral print, ruched side with self-tie closure, concealed back zipper, and a flounce hem.",
      imgUrl: Img2Showcase,
      CTAText: "Adicionar",
      colors: ["#EAE9E5", "#CFC9B0", "#D84E4B", "#1C1A19"],
    },
  ];

  return (
    <div className="wrapper-showcase">
      <div className="showcase">
        <h3 className="titulo-showcase">As Mais Pedidas</h3>
        <Slider {...settings}>
          {data.map((item) => {
            return (
              <div key={item.id}>
                <div className="card-showcase">
                  <img
                    src={item.imgUrl}
                    alt={item.imgUrl}
                    className="img-showcase"
                  />
                  <div className="colors-sku">
                    {item.colors.map((color) => {
                      return (
                        <div
                          style={{ backgroundColor: color }}
                          className="color-option"
                          key={color}
                          tabIndex={0}
                        />
                      );
                    })}
                  </div>
                  <p className="value-showcase">{item.value}</p>
                  <h3 className="name-showcase">{item.name}</h3>
                  <p className="description-showcase">{item.description}</p>
                  <button className="cta-showcase">{item.CTAText}</button>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export { Showcase };
