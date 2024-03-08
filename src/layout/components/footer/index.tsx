import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconMastercard,
  IconVisa,
  IconYoutube,
  LogoMaeztraWhite,
  LogoVtex,
} from "../../../assets";
import { MenuFooter } from "./components/menu";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <MenuFooter />
      <div className="wrapper-footer-bar">
        <div className="footer-bar">
          <div className="social-medias">
            <img src={IconFacebook} alt="Acessar página no Facebook" />
            <img src={IconLinkedin} alt="Acessar página no Linkedin" />
            <img src={IconInstagram} alt="Acessar página no Instagram" />
            <img src={IconYoutube} alt="Acessar canal no Youtube" />
          </div>
          <div className="payment-methods">
            <img src={IconVisa} alt="Forma de Pagamento - Visa" />
            <img src={IconMastercard} alt="Forma de Pagamento - MasterCard" />
            <img src={IconVisa} alt="Forma de Pagamento - Visa" />
            <img src={IconMastercard} alt="Forma de Pagamento - MasterCard" />
          </div>
          <div className="credits">
            <div className="credits-item">
              <p>Powered by</p>
              <img src={LogoVtex} alt="VTEX" />
            </div>
            <div className="credits-item">
              <p>Developed by</p>
              <img src={LogoMaeztraWhite} alt="Maeztra" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
