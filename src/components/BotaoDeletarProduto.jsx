import React from 'react'
import axios from 'axios'

const BotaoDeletarProduto = ({ produtoId, onProdutoDeletado }) => {
    const handleDelete = async () => {
        const ok = window.confirm(`Deletar produto ${produtoId}?`)
        if (!ok) return

        try {
            await axios.delete(`http://localhost:3001/produtos/${produtoId}`)
            if (typeof onProdutoDeletado === 'function') onProdutoDeletado()
            alert('Produto deletado com sucesso.')
        } catch (err) {
            console.error('Erro ao deletar:', err)
            alert('Não foi possível deletar o produto.')
        }
    }

    return (
        <button
            type="button"
            aria-label={`Excluir produto ${produtoId}`}
            onClick={handleDelete}
            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
        >
            Excluir
        </button>
    )
}

export default BotaoDeletarProduto