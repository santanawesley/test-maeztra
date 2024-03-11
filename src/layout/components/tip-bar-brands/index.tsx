import { useEffect } from "react";
import {
  LogoAnnTaylor,
  LogoComma,
  LogoForever,
  LogoMelissa,
  LogoZara,
} from "../../../assets";
import "./tip-bar-brands.scss";
import { touch } from "../../utils/touch";

const TipBarBrands = () => {
  useEffect(() => {
    const categoriaContainer = document.querySelector(".imgs-bar-brands");
    touch(categoriaContainer as HTMLDivElement);
  }, []);

  return (
    <div className="wrapper-tip-bar-brands">
      <div className="tip-bar-brands">
        <h3 className="title-bar-brands">Marcas Parceiras</h3>
        <div className="imgs-bar-brands">
          <div className="img-brand">
            <img src={LogoComma} alt="Marca Parceira - Comma" />
          </div>
          <div className="img-brand">
            <img src={LogoMelissa} alt="Marca Parceira - Melissa" />
          </div>
          <div className="img-brand">
            <img src={LogoForever} alt="Marca Parceira - Forever 21" />
          </div>
          <div className="img-brand">
            <img src={LogoZara} alt="Marca Parceira - Zara" />
          </div>
          <div className="img-brand">
            <img src={LogoAnnTaylor} alt="Marca Parceira - Ann Taylor" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { TipBarBrands };
