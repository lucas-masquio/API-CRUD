import { useEffect, useState } from 'react'
import axios from 'axios'

function ListaProdutos() {
  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    let mounted = true
    axios
      .get('http://localhost:3001/produtos')
      .then((res) => {
        if (mounted) setProdutos(res.data || [])
      })
      .catch((err) => {
        console.error('Erro ao buscar produtos:', err)
      })

    return () => { mounted = false }
  }, [])

  if (!produtos || produtos.length === 0) {
    return (
      <main className="max-w-4xl mx-auto">
        <p className="text-center">Nenhum produto encontrado.</p>
      </main>
    )
  }

  return (
    <main className="max-w-4xl mx-auto">
      <div className="product-grid grid grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((p) => {
          const { id, nome, preco, categoria, descricao } = p
          return (
            <article key={id} className="product-card bg-white rounded-lg p-4 shadow-md border border-gray-200 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">{nome}</h3>
                {descricao && <p className="text-sm text-gray-600 mb-3">{descricao}</p>}
              </div>

              <div className="flex items-center justify-between mt-2">
                <span className="text-sm text-gray-500">Categoria: {categoria}</span>
                <span className="text-indigo-600 font-semibold">R$ {Number(preco || 0).toFixed(2)}</span>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}

export default ListaProdutos