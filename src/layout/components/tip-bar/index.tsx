import {
  IconDiscount,
  IconExchanges,
  IconGlobe,
  IconStock,
  IconTruck,
} from "../../../assets";
import "./tip-bar.scss";

const TipBar = () => {
  return (
    <div className="wrapper-tip-bar">
      <div className="tip-bar">
        <div className="title-tip-bar">Por que comprar na Maeztra?</div>
        <div className="tips">
          <div className="tip-item">
            <img
              src={IconGlobe}
              alt="Produtos importados"
              className="tip-icon"
            />
            <div className="tip-texts">
              <p className="tip-title">Produtos importados</p>
              <p className="tip-description">Produto de Alta Qualidade</p>
            </div>
          </div>
          <div className="tip-item">
            <img src={IconStock} alt="Estoque no Brazil" className="tip-icon" />
            <div className="tip-texts">
              <p className="tip-title">Estoque no Brazil</p>
              <p className="tip-description">Produtos mais perto de você!</p>
            </div>
          </div>
          <div className="tip-item">
            <img
              src={IconExchanges}
              alt="Trocas Garantidas"
              className="tip-icon"
            />
            <div className="tip-texts">
              <p className="tip-title">Trocas Garantidas</p>
              <p className="tip-description">
                Trocas em até 48 horas, vejas as regras
              </p>
            </div>
          </div>
          <div className="tip-item">
            <img src={IconDiscount} alt="Ganhe 5% off" className="tip-icon" />
            <div className="tip-texts">
              <p className="tip-title">Ganhe 5% off</p>
              <p className="tip-description">Pagando à vista no Cartão</p>
            </div>
          </div>
          <div className="tip-item">
            <img src={IconTruck} alt="Frete Grátis" className="tip-icon" />
            <div className="tip-texts">
              <p className="tip-title">Frete Grátis</p>
              <p className="tip-description">Em compras acima de R$ 499,00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TipBar };
