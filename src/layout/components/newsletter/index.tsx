import "./newsletter.scss";

const Newsletter = () => {
  return (
    <div className="wrapper-newsletter">
      <div className="newsletter">
        <div className="title-newsletter">Receba Nossa Newsletter</div>
        <div className="input-newsletter">
          <input type="email" placeholder="Digite seu e-mail" />
          <button type="submit">Enviar</button>
        </div>
      </div>
    </div>
  );
};

export { Newsletter };
