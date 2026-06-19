import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de ter o Axios instalado
    export default function ListaDeUsuarios() {
        const [usuarios, setUsuarios] = useState([]);
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState(null);

        useEffect(() => {
            setLoading(true);
            setError(null);
            axios.get('http://localhost:3001/usuarios') // Requisição GET para listar usuários
                .then(response => {
                    setUsuarios(response.data); // Os dados da resposta Axios vêm em 'response.data'
                    setLoading(false);
                })
                .catch(err => {
                    setError("Erro ao carregar usuários.");
                    setLoading(false);
                    console.error('Erro GET:', err);
                });
        }, []); // O array vazio garante que a requisição ocorra apenas uma vez ao montar

    export default function AdicionarUsuario({ onUsuarioAdicionado }) { // Recebe um callback para notificar
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('');
        const [status, setStatus] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault(); // Evita o recarregamento da página
            setStatus('Adicionando...');
            try {
                const response = await axios.post('http://localhost:3001/usuarios', { // Requisição POST
                    nome: nome,
                    email: email
                });
                console.log('Usuário adicionado:', response.data);
                setStatus('Usuário adicionado com sucesso!');
                setNome('');
                setEmail('');
                if (onUsuarioAdicionado) {
                    onUsuarioAdicionado(); // Notifica o componente pai para recarregar a lista, por exemplo
                }
            } catch (err) {
            setStatus('Erro ao adicionar usuário.');
            console.error('Erro POST:', err);
            }
        }
    }

useEffect(() => {
    if (usuarioParaEditar) {
        setId(usuarioParaEditar.id);
        setNome(usuarioParaEditar.nome);
        setEmail(usuarioParaEditar.email);
    }    
}, [usuarioParaEditar]); // Atualiza o formulário se o usuário para editar mudar
    
const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
            setStatus('Selecione um usuário para editar.');
            return;
    }
    setStatus('Atualizando...');
    try {
        const response = await axios.put(`http://localhost:3001/usuarios/${id}`, { // Requisição PUT
            nome: nome, // Envie todos os campos que definem o recurso completo
            email: email
        });
        console.log('Usuário atualizado:', response.data);
        setStatus('Usuário atualizado com sucesso!');
        if (onUsuarioAtualizado) {
            onUsuarioAtualizado(); // Notifica o componente pai
        }
    } catch (err) {
        setStatus('Erro ao atualizar usuário.');
        console.error('Erro PUT:', err);
    }
    };
}