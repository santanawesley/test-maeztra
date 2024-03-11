import { IconHeartWhite, IconUserWhite } from "../../../../../assets";
import "./menu-vertical.scss";

type MenuVerticalProps = {
  closeMenu: () => void;
};

const MenuVertical: React.FC<MenuVerticalProps> = ({ closeMenu }) => {
  return (
    <div className="menu-vertical">
      <button onClick={closeMenu} className="close-menu">
        X
      </button>
      <h1 className="title-menu-vertical">Maeztra</h1>
      <div className="menu-produtos">
        <nav>
          <ul className="listagem-menu">
            <li>
              <a href="#" className="link-menu">
                Novidades
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                Vestidos
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                Roupas
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                Sapatos
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                Lingerie
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                Acessórios
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                OUTLET
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="menu-usuario">
        <nav>
          <ul className="listagem-menu">
            <li>
              <a href="#" className="link-menu">
                <img src={IconUserWhite} alt="Novidades" />
                <div>Minha Conta</div>
              </a>
            </li>
            <li>
              <a href="#" className="link-menu">
                <img src={IconHeartWhite} alt="Novidades" />
                <div>Favoritos</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { MenuVertical };
