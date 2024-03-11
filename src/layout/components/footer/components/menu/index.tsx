import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import "./menu-footer.scss";

const MenuFooter = () => {
  const showMenu = useMediaQuery({ minWidth: 481 });

  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategoryClick = (category: number) => {
    if (menuOpen && category === selectedCategory) {
      setMenuOpen(false);
      setSelectedCategory(0);
    } else {
      setMenuOpen(true);
      setSelectedCategory(category);
    }
  };

  return (
    <div className="wrapper-menu-footer">
      <div className="menu-footer">
        <div className="columns-menu-footer category">
          <div
            className="wrapper-title-menu-footer"
            onClick={() => handleCategoryClick(1)}
          >
            <h3 className="title-menu-footer">Informações</h3>
            <button className="toggle-btn">
              {menuOpen && selectedCategory === 1 ? "-" : "+"}
            </button>
          </div>
          {((menuOpen && selectedCategory === 1) || showMenu) && (
            <nav className="links">
              <ul>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(1)}
                  >
                    Quem Somos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(1)}
                  >
                    Prazo de Envio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(1)}
                  >
                    Trocas e Devoluções
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(1)}
                  >
                    Promoções e Cupons
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="columns-menu-footer category">
          <div
            className="wrapper-title-menu-footer"
            onClick={() => handleCategoryClick(2)}
          >
            <h3 className="title-menu-footer">Minha Conta</h3>
            <button className="toggle-btn">
              {menuOpen && selectedCategory === 2 ? "-" : "+"}
            </button>
          </div>
          {((menuOpen && selectedCategory === 2) || showMenu) && (
            <nav className="links">
              <ul>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(2)}
                  >
                    Minha Conta
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(2)}
                  >
                    Meus Pedidos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(3)}
                  >
                    Cadastre-se
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
        <div className="columns-menu-footer category">
          <div
            className="wrapper-title-menu-footer"
            onClick={() => handleCategoryClick(3)}
          >
            <h3 className="title-menu-footer">Onde nos Encontrar</h3>
            <button className="toggle-btn">
              {menuOpen && selectedCategory === 3 ? "-" : "+"}
            </button>
          </div>
          {((menuOpen && selectedCategory === 3) || showMenu) && (
            <nav className="links">
              <ul>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(3)}
                  >
                    Lojas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="item-menu-footer"
                    onClick={() => handleCategoryClick(3)}
                  >
                    Endereço
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
};

export { MenuFooter };
