import React from 'react'
import axios from 'axios'

// Botão simples para deletar um usuário
// Props:
// - usuarioId: id do usuário a ser deletado
// - onUsuarioDeletado: callback chamado após exclusão bem-sucedida
const BotaoDeletarUsuario = ({ usuarioId, onUsuarioDeletado }) => {
    const handleDelete = async () => {
        const ok = window.confirm(`Deletar usuário ${usuarioId}?`)
        if (!ok) return

        try {
            await axios.delete(`http://localhost:3001/usuarios/${usuarioId}`)
            // chama callback se fornecido
            if (typeof onUsuarioDeletado === 'function') onUsuarioDeletado()
            alert('Usuário deletado com sucesso.')
        } catch (err) {
            console.error('Erro ao deletar:', err)
            alert('Não foi possível deletar o usuário.')
        }
    }

    return (
        <button
            type="button"
            aria-label={`Excluir usuário ${usuarioId}`}
            onClick={handleDelete}
            className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
        >
            Excluir
        </button>
    )
}

export default BotaoDeletarUsuario