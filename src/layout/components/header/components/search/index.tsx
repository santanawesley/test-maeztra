import "./search.scss";

const Search = () => {
  const searchProduct = () => {
    console.log("Buscar Produto");
  };

  return (
    <div className="search">
      <input type="search" placeholder="O Que Você Busca?" />
      <button type="button" onClick={searchProduct}>
        Buscar
      </button>
    </div>
  );
};

export { Search };
