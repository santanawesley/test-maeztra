import { IconMail, IconSend, ImgNewsletter } from "../../../assets";
import "./modal-newsletter.scss";

type ModalNewsletterProps = {
  closeModal: () => void;
};

const ModalNewsletter: React.FC<ModalNewsletterProps> = ({ closeModal }) => {
  return (
    <div className="wrapper-modal-newsletter">
      <div className="modal-newsletter">
        <p onClick={closeModal} className="close-modal">
          Fechar
        </p>
        <div className="content-modal">
          <div className="img-modal">
            <img src={ImgNewsletter} alt="" />
          </div>
          <div className="text-modal">
            <img src={IconMail} alt="" className="icon-mail" />
            <p className="title-modal">Bem Vindo à MAEZTRA</p>
            <p className="description-modal">
              Receba em Primeira mão <br />
              <span className="hightligth-description">
                desconto e ofertas exclusivas
              </span>
            </p>
            <div className="wrapper-send-info">
              <input
                type="email"
                placeholder="Digite seu e-mail"
                className="input-mail"
              />
              <button type="button" className="cta-mail">
                Enviar
                <img
                  src={IconSend}
                  alt="Enviar e-mail informado"
                  className="icon-send"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalNewsletter };
