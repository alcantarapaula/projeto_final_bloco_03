import { Link } from "react-router-dom";
import type Produto from "../../../models/Produto";
import { PencilIcon, ShoppingCartIcon, TrashIcon } from "@phosphor-icons/react";

interface CardProdutoProps {
  produto: Produto
}

function CardProduto({produto}: CardProdutoProps) {
  return (
    <div className="border-slate-900 border flex flex-col rounded overflow-hidden justify-between bg-white">
      <div>
        <div className="p-4">
          <div className="flex w-full bg-indigo-800 py-2 px-4 items-center gap-4 text-white rounded">
          <img src={produto.foto} className="h-12 rounded-full" alt={produto.nome} />
          <h3 className="text-lg font-bold text-center uppercase">{produto.nome}</h3>
        </div>
          <p>Preço: R${produto.preco}</p>
          <p>Categoria: {produto.categoria?.nome}</p>
        </div>
      </div>
      <div className="flex bg-indigo-800 items-center justify-center text-white">
        <Link to="#" className="p-2 hover:text-green-500">
          <ShoppingCartIcon size={32} />
        </Link>
        <Link to={`/editarproduto/${produto.id}`} className="p-2 hover:text-indigo-500">
          <PencilIcon size={32} />
        </Link>
        <Link to={`/deletarproduto/${produto.id}`} className="p-2 hover:text-red-500">
          <TrashIcon size={32} />
        </Link>
      </div>
    </div>
  )
}

export default CardProduto