import { useState } from "react";
import axios from "axios";

function AdicionarProduto({ onAdd }) {
  const [nome, setNome] = useState("");

  const adicionar = () => {
    if (nome.trim() === "") return;
    
    axios.post("http://localhost:3001/produtos", { 
      nome, 
      preco: 0, 
      categoria: "Sem categoria" 
    })
    .then(res => {
      onAdd(res.data);
      setNome("");
    })
    .catch(err => console.error(err));
  };

  return (
    <div className="flex gap-2 p-4">
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Nome do produto"
        className="border p-2 rounded flex-1"
      />
      <button onClick={adicionar} className="bg-blue-500 text-white px-4 py-2 rounded">
        Adicionar
      </button>
    </div>
  );
}

export default AdicionarProduto;