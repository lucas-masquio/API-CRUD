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
    <main className="max-w-2xl mx-auto">
      {produtos.length === 0 ? (
        <p className="text-center">Nenhum produto encontrado.</p>
      ) : (
        <ul className="space-y-3">
          {produtos.map((produto) => (
            <li key={produto.id} className="border p-3 rounded">
              <div className="font-semibold">{produto.nome}</div>
              <div>R$ {Number(produto.preco).toFixed(2)}</div>
              <div className="text-sm text-gray-600">Categoria: {produto.categoria}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default ListaProdutos;