import { useState } from "react";
import axios from "axios";

function AdicionarProduto({ onAdd }) {
    const [nome, setNome, preco, setPreco, categoria, setCategoria] = useState("");

    const adicionar = () => {
        if (nome.trim() === "") return;
        setNome(""); 

        if (preco.trim() === "") return;
        setPreco("");

        if (categoria.trim() === "") return;
        setCategoria("");
    
        axios.post("http://localhost:3001/produtos", { 
            nome, 
            preco, 
            categoria,
        })
        .then(res => {
            onAdd(res.data);
            setNome("");
            window.alert("Produto adicionado. Atualize a página.")
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
            />

            <input
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Preço do produto"
            />

            <input
                type="text"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value)}
                placeholder="Categoria do produto"
                onChange
                className="border p-2 rounded flex-1"
            />
            <button onClick={adicionar} className="bg-blue-500 text-white px-4 py-2 rounded">
                Adicionar
            </button>
        </div>
    );
}

export default AdicionarProduto;