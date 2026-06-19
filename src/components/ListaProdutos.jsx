import { useEffect, useState } from "react";
import axios from "axios";

function ListaProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/produtos")
      .then((response) => {
        setProdutos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center m-8">
        Lista de Produtos
      </h1>

      <div>
        {produtos.map((produto) => (
          <div
            key={produto.id}
            className="bg-white p-5"
          >
            <h2 className="text-xl font-semibold">
              {produto.nome}
            </h2>

            <p className="font-bold mt-2">
              R$ {produto.preco.toFixed(2)}
            </p>

            <p className="m-1">
              Categoria: {produto.categoria}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListaProdutos;