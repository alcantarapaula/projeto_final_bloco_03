import { Link } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { PencilIcon, TrashIcon } from "@phosphor-icons/react";

interface CardCategoriaProps{
  categoria: Categoria
}
function CardCategoria({categoria}: CardCategoriaProps) {
  return (
    <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
      <header className="py-2 px-6 bg-indigo-800 text-white font-bold text-2xl">Categoria</header>
      <p className="p-8 text-3xl bg-white h-full">{categoria.nome}</p>
      <div className="flex bg-indigo-800 items-center justify-center text-white">
        <Link to={`/editarcategoria/${categoria.id}`} className="p-2 hover:text-indigo-500">
          <PencilIcon size={32} />
        </Link>
        <Link to={`/deletarcategoria/${categoria.id}`} className="p-2 hover:text-red-500">
          <TrashIcon size={32} />
        </Link>
      </div>
    </div>
  )
}

export default CardCategoria