import { useState } from "react";

import { IconDress } from "../../../../../assets";
import "./menu.scss";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState("novidades");

  const changeActiveMenu = (itemMenu: string) => {
    setActiveMenu(itemMenu);
  };

  return (
    <nav>
      <ul className="listagem-menu">
        <li onClick={() => changeActiveMenu("novidades")}>
          <a
            href="#"
            className={`${activeMenu === "novidades" ? "active-menu" : ""}`}
          >
            <img src={IconDress} alt="Novidades" />
            <div>Novidades</div>
          </a>
        </li>
        <li onClick={() => changeActiveMenu("vestidos")}>
          <a
            href="#"
            className={`${activeMenu === "vestidos" ? "active-menu" : ""}`}
          >
            Vestidos
          </a>
        </li>
        <li onClick={() => changeActiveMenu("roupas")}>
          <a
            href="#"
            className={`${activeMenu === "roupas" ? "active-menu" : ""}`}
          >
            Roupas
          </a>
        </li>
        <li onClick={() => changeActiveMenu("sapatos")}>
          <a
            href="#"
            className={`${activeMenu === "sapatos" ? "active-menu" : ""}`}
          >
            Sapatos
          </a>
        </li>
        <li onClick={() => changeActiveMenu("lingeries")}>
          <a
            href="#"
            className={`${activeMenu === "lingeries" ? "active-menu" : ""}`}
          >
            Lingerie
          </a>
        </li>
        <li onClick={() => changeActiveMenu("acessorios")}>
          <a
            href="#"
            className={`${activeMenu === "acessorios" ? "active-menu" : ""}`}
          >
            Acessórios
          </a>
        </li>
        <li onClick={() => changeActiveMenu("outlet")}>
          <a
            href="#"
            className={`${activeMenu === "outlet" ? "active-menu" : ""}`}
          >
            OUTLET
          </a>
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
