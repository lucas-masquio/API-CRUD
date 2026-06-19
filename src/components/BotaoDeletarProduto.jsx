import React from 'react'
import axios from 'axios'

// Botão simples para deletar um usuário
// Props:
// - usuarioId: id do usuário a ser deletado
// - onUsuarioDeletado: callback chamado após exclusão bem-sucedida
const BotaoDeletarProduto = ({ produtoId, onProdutoDeletado }) => {
    const handleDelete = async () => {
        const ok = window.confirm(`Deletar usuário ${produtoId}?`)
        if (!ok) return

        try {
            await axios.delete(`http://localhost:3001/produtos/${produtoId}`)
            // chama callback se fornecido
            if (typeof onProdutoDeletado === 'function') onProdutoDeletado()
            alert('Usuário deletado com sucesso.')
        } catch (err) {
            console.error('Erro ao deletar:', err)
            alert('Não foi possível deletar o usuário.')
        }
    }

    return (
        <button
            type="button"
            aria-label={`Excluir usuário ${produtoId}`}
            onClick={handleDelete}
            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
        >
            Excluir
        </button>
    )
}

export default BotaoDeletarProduto