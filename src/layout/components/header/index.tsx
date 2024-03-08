import { useState } from "react";

import { IconHeart, IconUser, IconShoppingBag, Logo } from "../../../assets";
import { Search } from "./components/search";
import { Menu } from "./components/menu";
import "./header.scss";

const Header = () => {
  const [activeMenuNavigation, setActiveMenuNavigation] = useState("");

  const changeActiveMenuNavigation = (itemMenu: string) => {
    setActiveMenuNavigation(itemMenu);
  };

  return (
    <div className="header">
      <div className="header-bar">
        <p>Acompanhe as melhores promoções disponíveis aqui na Maeztra.</p>
      </div>
      <div className="wrapper-navigation-bar">
        <div className="navigation-bar">
          <div className="navigation-first-section">
            <img src={Logo} alt="Maeztra" />
            <Search />
          </div>
          <div className="navigation-second-section">
            <a
              className={`item-menu-navigation ${
                activeMenuNavigation === "account"
                  ? "active-menu-navigation"
                  : ""
              }`}
              onClick={() => changeActiveMenuNavigation("account")}
              href="#"
            >
              <img src={IconUser} alt="Ver dados da conta" />
              <p>Minha Conta</p>
            </a>
            <a
              className={`item-menu-navigation ${
                activeMenuNavigation === "favorite"
                  ? "active-menu-navigation"
                  : ""
              }`}
              onClick={() => changeActiveMenuNavigation("favorite")}
              href="#"
            >
              <img src={IconHeart} alt="Ver produtos favoritos" />
              <p>Favoritos</p>
            </a>
            <a
              className={`item-menu-navigation ${
                activeMenuNavigation === "cart" ? "active-menu-navigation" : ""
              }`}
              onClick={() => changeActiveMenuNavigation("cart")}
              href="#"
            >
              <img src={IconShoppingBag} alt="Ver carrinho" />
              <p>Meu Carrinho</p>
            </a>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export { Header };
