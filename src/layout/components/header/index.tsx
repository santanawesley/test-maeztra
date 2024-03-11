import {
  IconHeart,
  IconUser,
  IconShoppingBag,
  Logo,
  IconMenuDrawer,
  IconSearch,
  IconShoppingBag2x,
} from "../../../assets";
import { Search } from "./components/search";
import { Menu } from "./components/menu";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      <div className="wrapper-navigation-bar">
        <div className="navigation-bar">
          <div className="navigation-first-section">
            <img
              src={IconMenuDrawer}
              alt="Abrir Menu"
              className="menu-drawer"
            />
            <img src={Logo} alt="Maeztra" className="logo-header" />
            <Search />
          </div>
          <div className="navigation-second-section">
            <a className="item-menu-navigation" href="#">
              <img src={IconUser} alt="Ver dados da conta" />
              <p>Minha Conta</p>
            </a>
            <a className="item-menu-navigation" href="#">
              <img src={IconHeart} alt="Ver produtos favoritos" />
              <p>Favoritos</p>
            </a>
            <a className="item-menu-navigation" href="#">
              <img src={IconShoppingBag} alt="Ver carrinho" />
              <p>Meu Carrinho</p>
            </a>
          </div>
          <div className="nav-second-section-mob">
            <img src={IconSearch} alt="Abrir Busca" className="icon-nav-mob" />
            <img
              src={IconShoppingBag2x}
              alt="Abrir Carrinho"
              className="icon-nav-mob"
            />
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export { Header };
