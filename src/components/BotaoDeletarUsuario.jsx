import React from 'react';
import axios from 'axios';

function BotaoDeletarUsuario({ usuarioId, onUsuarioDeletado }) {
    const handleDelete = async () => {
        if (!window.confirm(`Tem certeza que deseja deletar o usuário com ID: ${usuarioId}?`)) {
            return;
        }

        try {
            await axios.delete(`http://localhost:3001/usuarios/${usuarioId}`); // Requisição DELETE
            console.log(`Usuário com ID ${usuarioId} deletado.`);
            if (onUsuarioDeletado) {
                onUsuarioDeletado();
            }
        } catch (err) {
            console.error('Erro DELETE:', err);
            alert('Erro ao deletar usuário.');
        }
    };

    return (
        <button onClick={handleDelete} className="ml-2 bg-red-500 text-white px-2 py-1 rounded">
            Excluir
        </button>
    );
}

export default BotaoDeletarUsuario;