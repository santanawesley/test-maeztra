import "./menu-footer.scss";

const MenuFooter = () => {
  return (
    <div className="wrapper-menu-footer">
      <div className="menu-footer">
        <div className="columns-menu-footer first-column-menu-footer">
          <h3 className="title-menu-footer">Informações</h3>
          <nav>
            <ul>
              <li>
                <a href="#" className="item-menu-footer">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Prazo de Envio
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Trocas e Devoluções
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Promoções e Cupons
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="columns-menu-footer">
          <h3 className="title-menu-footer">Minha Conta</h3>
          <nav>
            <ul>
              <li>
                <a href="#" className="item-menu-footer">
                  Minha Conta
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Meus Pedidos
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Cadastre-se
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="columns-menu-footer">
          <h3 className="title-menu-footer">Onde nos Encontrar</h3>
          <nav>
            <ul>
              <li>
                <a href="#" className="item-menu-footer">
                  Lojas
                </a>
              </li>
              <li>
                <a href="#" className="item-menu-footer">
                  Endereço
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { MenuFooter };
