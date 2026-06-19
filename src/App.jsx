import ListaProdutos from "./components/ListaProdutos.jsx";
import BotaoDeletarUsuario from "./components/BotaoDeletarUsuario.jsx";
import AdicionarProduto from "./components/AdicionarProduto.jsx";

function App(){
    return(
        <div className="min-h-screen bg-gray-50 p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Lista de Produtos</h1>
            <ListaProdutos />
            <AdicionarProduto />
        </div>
    )
}

export default App;