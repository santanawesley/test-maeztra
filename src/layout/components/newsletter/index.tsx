import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="wrapper-newsletter">
      <div className="newsletter">
        <div className="title-newsletter">Receba Nossa Newsletter</div>
        <div className="inputs-newsletter">
          <input
            type="email"
            placeholder="Digite seu e-mail"
            className="input-newsletter"
          />
          <button type="submit" className="button-newsletter">
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
