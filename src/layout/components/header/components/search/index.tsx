import "./search.scss";

const Search = () => {
  const searchProduct = () => {
    console.log("Buscar Produto");
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="O Que Você Busca?"
        className="search-input"
      />
      <button type="button" onClick={searchProduct} className="search-button">
        Buscar
      </button>
    </div>
  );
};

export { Search };
