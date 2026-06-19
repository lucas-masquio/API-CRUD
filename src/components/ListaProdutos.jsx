import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Certifique-se de ter o Axios instalado
    function ListaDeUsuarios() {
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

    function AdicionarUsuario({ onUsuarioAdicionado }) { // Recebe um callback para notificar
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
        